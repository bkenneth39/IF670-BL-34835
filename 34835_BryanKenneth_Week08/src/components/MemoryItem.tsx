import { IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonGrid } from "@ionic/react"
import React, { useContext } from "react"
import MemoriesContext from "../data/memories-context"

const MemoryType: React.FC <{memory: any}> = props  => {
    const memoriesCtx = useContext(MemoriesContext)
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
                                        <img src={memory.base64Url} alt={memory.title}/>
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