import { IonButton, IonButtons, IonCard, IonCardHeader, IonCardTitle, IonCol, IonContent, IonFab, IonFabButton, IonGrid, IonHeader, IonIcon, IonPage, IonRow, IonTitle, IonToolbar, isPlatform } from "@ionic/react"
import { add } from "ionicons/icons"
import { useContext } from "react"
import MemoriesContext from "../data/memories-context"
import MemoryItem from '../components/MemoryItem'
const GoodMemories: React.FC = () => {
    // const memoriesCtx = useContext(MemoriesContext)
    // const goodMemories = memoriesCtx.memories.filter(memory => memory.type === 'good')

    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Good Memories</IonTitle>
                    {isPlatform("ios") && (
                    <IonButtons slot="end">
                        <IonButton routerLink="/NewMemory">
                            <IonIcon icon={add} />
                        </IonButton>
                    </IonButtons>
                    )}
                </IonToolbar>
            </IonHeader>

            <IonContent>
               
                {!isPlatform("ios") && (
                    <IonFab vertical="bottom" horizontal="end" slot="fixed">
                    <IonFabButton routerLink="/NewMemory">
                        <IonIcon icon={add} />
                    </IonFabButton>
                    </IonFab>
                )}

                <MemoryItem memory={"good"} />

                {/* <IonGrid>
                    {goodMemories.length === 0 && (
                        <IonRow>
                            <IonCol className="ion-text-center">
                                <h2>No good memories found</h2>
                            </IonCol>
                        </IonRow>
                    )}

                    {goodMemories.map(memory => (
                        <IonRow key={memory.id}>
                            {memory.type}
                            {memory.title}
                            <IonCol>
                                <IonCard>
                                    <img src={memory.imagePath} alt={memory.title} />
                                    <IonCardHeader>
                                        <img src={memory.base64Url} alt={memory.title}/>
                                        <IonCardTitle>{memory.title}</IonCardTitle>
                                    </IonCardHeader>
                                </IonCard>
                            </IonCol>
                        </IonRow>
                    ))}
                </IonGrid> */}
            </IonContent>
        </IonPage>
    )
}

export default GoodMemories