import { IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonGrid } from "@ionic/react"
import React, { useContext } from "react"
import MemoriesContext from "../data/memories-context"
import {GoogleMap, InfoWindow, LoadScript, Marker} from '@react-google-maps/api'
const MemoryType: React.FC <{memory: any}> = props  => {
    const memoriesCtx = useContext(MemoriesContext)
    const containerStyle = {
        width: '100%',
        height: '140px'
      }
    const memories = memoriesCtx.memories.filter(memory => memory.type === props.memory)
    return(

       <IonGrid>
                    {memories.length === 0 && (
                        <IonRow>
                            <IonCol className="ion-text-center">
                                <h2>No good memories found</h2>
                            </IonCol>
                        </IonRow>
                    )}

                    {memories.map(memory => (
                        <IonRow key={memory.id}>
                            {/* {memory.type}
                            {memory.title} */}
                            <IonCol>
                                <IonCard>
                                    {/* <img src={memory.imagePath} alt={memory.title} /> */}
                                    <IonCardHeader>
                                        <img src={`http://localhost/apiChallenge/uploads/${memory.imagePath}`} alt={memory.title}/>
                                        
                                        <GoogleMap
                                            mapContainerStyle={containerStyle}
                                            center={{lat:parseFloat(memory.lat), lng:parseFloat(memory.lng)}}
                                            zoom={18}
                                           
                                            
                                        >
                                            <Marker position={{lat:parseFloat(memory.lat), lng:parseFloat(memory.lng)}} />
                                            <></>
                                            {/* <InfoWindow position={{lat:lat,lng:lng}}>
                                            <div>
                                                <h1 style={{color:'black'}}>Kampus paling keren.</h1>
                                            </div>
                                            </InfoWindow> */}
                                        </GoogleMap>
                                        <IonCardTitle>{memory.title}</IonCardTitle>
                                    </IonCardHeader>
                                </IonCard>
                            </IonCol>
                        </IonRow>
                    ))}
                </IonGrid>
    )
}

export default MemoryType