import { IonBackButton, IonButton, IonButtons, IonCol, IonContent, IonIcon, IonInput, IonItem, IonLabel, IonPage, IonRow, IonSelect, IonSelectOption, IonTitle, IonToolbar } from "@ionic/react"
import { camera } from "ionicons/icons"
import {Camera, CameraResultType, CameraSource} from '@capacitor/camera'
import './NewMemory.css'
import {Geolocation} from '@capacitor/geolocation'
import { useState,useRef, useContext, useEffect } from "react"
import {Directory, Filesystem} from "@capacitor/filesystem";
import {GoogleMap, InfoWindow, LoadScript, Marker} from '@react-google-maps/api'
import {base64FromPath} from "@ionic/react-hooks/filesystem"
import MemoriesContext from "../data/memories-context"
import { useHistory } from "react-router-dom"

const NewMemory: React.FC = () => {
    const memoriesCtx = useContext(MemoriesContext)
    const history = useHistory()
    const [chosenMemoryType, setChosenMemoryType] = useState<'good' | 'bad'>('good')
    const titleRef = useRef<HTMLIonInputElement>(null)
    const[lat, setLat] = useState(-6.257377926995551)
    const[lng, setLng] = useState(106.61829861017398)
    
    const getCurrentPosition = async() => {
        const coordinates = await Geolocation.getCurrentPosition({enableHighAccuracy: true})
        
        console.log('Current position: ', coordinates)
        console.log('Lat: ', coordinates.coords.latitude)
        console.log('Lng:',coordinates.coords.longitude)
        setLat(coordinates.coords.latitude)
        setLng(coordinates.coords.longitude)
    }
    useEffect(() => {
        getCurrentPosition()
        
       
    }, [])

    const selectPos = (e: google.maps.MapMouseEvent) => {
        if(e.latLng?.lat()){
          setLat(e.latLng?.lat())
        }
        if(e.latLng?.lng()){
          setLng(e.latLng?.lng())
        }
      }
      const containerStyle = {
        width: '100%',
        height: '40%',
        justifyContent: 'center',
       
      }
   
    const selectMemoryTypeHandler = (event: CustomEvent) => {
        const selectedMemoryType = event.detail.value
        setChosenMemoryType(selectedMemoryType)
    }

    const addMemoryHandler = async() => {
        const enteredTitle = titleRef.current?.value;
        if(!enteredTitle || enteredTitle.toString().trim().length === 0 || !takenPhoto || !chosenMemoryType){
            return
        }
        const fileName = new Date().getTime() + '.jpg';
        const base64 = await base64FromPath(takenPhoto!.preview)
        await Filesystem.writeFile({
            path: fileName,
            data: base64,
            directory: Directory.Data
        })




        memoriesCtx.addMemory(fileName, base64, enteredTitle.toString(), chosenMemoryType,lat,lng)
        history.length > 0 ? history.goBack() : history.replace('/goodmemories')

    }
    const [takenPhoto, setTakenPhoto] = useState<{
        path: any
        preview: any
    }>()

    const takePhotoHandler = async() => {
        const photo = Camera.getPhoto({
            resultType: CameraResultType.Uri,
            source: CameraSource.Camera,
            quality: 80,
            width: 500
        })
        console.log(photo)

        if(!photo || /*!(await photo).path*/  !(await photo).webPath){
            return;
        }

        setTakenPhoto({
            path: (await photo).path,
            preview: (await photo).webPath
        })
    }
    return(
        <IonPage>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonBackButton defaultHref="/" />
                </IonButtons>
                <IonTitle>New Memory</IonTitle>
            </IonToolbar>

               

            <IonContent >
                <IonRow className="ion-margin-top border">
                    <IonCol>
                        <IonItem>
                            <IonLabel position="floating">Input Title</IonLabel>
                            <IonInput type="text" ref={titleRef}></IonInput>
                        </IonItem>
                    </IonCol>
                </IonRow>

                <IonRow>
                    <IonCol className="ion-text-left">
                        <IonSelect onIonChange={selectMemoryTypeHandler} value={chosenMemoryType}>
                            <IonSelectOption value="good">Good Memory</IonSelectOption>
                            <IonSelectOption value="bad">Bad Memory</IonSelectOption>
                        </IonSelect>
                    </IonCol>
                </IonRow>
                <IonRow className="ion-text-center">
                    <IonCol >
                        <div className="image-preview-wrapper">
                            <div className="image-preview">
                                {!takenPhoto && <h3>No photo chosen.</h3>}
                                {takenPhoto && <img src={takenPhoto.preview} alt="Preview" />}
                            </div>
                        </div>
                        <IonButton fill="clear" onClick={takePhotoHandler}>
                            <IonIcon slot="start" icon={camera}/>
                            <IonLabel>Take Photo</IonLabel>
                        </IonButton>
                    </IonCol>
                </IonRow>

              
                  
                        
                        <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={{lat:lat, lng:lng}}
                            zoom={18}
                            onClick={selectPos}
                            
                        >
                            <Marker position={{lat: lat, lng: lng}} />
                            <></>
                            {/* <InfoWindow position={{lat:lat,lng:lng}}>
                            <div>
                                <h1 style={{color:'black'}}>Kampus paling keren.</h1>
                            </div>
                            </InfoWindow> */}
                        </GoogleMap>
                       
                   
               
                <IonRow className="ion-margin-top">
                    <IonCol className="ion-text-center">
                        <IonButton onClick={addMemoryHandler}>Add Memory</IonButton>
                    </IonCol>
                </IonRow>
            </IonContent>
        </IonPage>
    )
}

export default NewMemory