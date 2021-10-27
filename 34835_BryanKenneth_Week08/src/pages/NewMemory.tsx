import { IonBackButton, IonButton, IonButtons, IonCol, IonContent, IonIcon, IonInput, IonItem, IonLabel, IonPage, IonRow, IonSelect, IonSelectOption, IonTitle, IonToolbar } from "@ionic/react"
import { camera } from "ionicons/icons"
import {Camera, CameraResultType, CameraSource} from '@capacitor/camera'
import './NewMemory.css'
import { useState,useRef, useContext } from "react"
import {Directory, Filesystem} from "@capacitor/filesystem";
import {base64FromPath} from "@ionic/react-hooks/filesystem"
import MemoriesContext from "../data/memories-context"
import { useHistory } from "react-router-dom"

const NewMemory: React.FC = () => {
    const memoriesCtx = useContext(MemoriesContext)
    const history = useHistory()
    const [chosenMemoryType, setChosenMemoryType] = useState<'good' | 'bad'>('good')
    const titleRef = useRef<HTMLIonInputElement>(null)
   
    const selectMemoryTypeHandler = (event: CustomEvent) => {
        const selectedMemoryType = event.detail.value
        setChosenMemoryType(selectedMemoryType)
    }

    const addMemoryHandler = async() => {
        const enteredTitle = titleRef.current?.value;
        if(!enteredTitle || enteredTitle.toString().trim().length === 0 || !takenPhoto || !chosenMemoryType){
            return
        }
        const fileName = new Date().getTime() + '.jpeg';
        const base64 = await base64FromPath(takenPhoto!.preview)
        await Filesystem.writeFile({
            path: fileName,
            data: base64,
            directory: Directory.Data
        })

        memoriesCtx.addMemory(fileName, base64, enteredTitle.toString(), chosenMemoryType)
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

               

            <IonContent>
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