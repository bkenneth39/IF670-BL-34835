import { IonContent,isPlatform, IonHeader, IonPage, IonTitle, IonToolbar, IonFab, IonFabButton, IonIcon, IonButtons, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCol, IonGrid, IonRow } from "@ionic/react"
import { add } from "ionicons/icons"
import { useContext } from "react"
import MemoriesContext from "../data/memories-context"
import MemoryItem from '../components/MemoryItem'

const BadMemories: React.FC = () => {
    // const memoriesCtx = useContext(MemoriesContext)
    // const badMemories = memoriesCtx.memories.filter(memory => memory.type === 'bad')
    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Bad Memories</IonTitle>
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

                <MemoryItem memory={"bad"} />
            </IonContent>
        </IonPage>
    )
}

export default BadMemories