import { isPlatform } from "@ionic/core"
import { IonAlert, IonAvatar, IonButton, IonButtons, IonCol, IonContent, IonFab, IonFabButton, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonMenuButton, IonModal, IonPage, IonRow, IonThumbnail, IonTitle, IonToast, IonToolbar } from "@ionic/react"
import { addOutline, ban, banSharp, create, pencil, trash } from "ionicons/icons"
import React, { useContext, useRef, useState } from "react"
import FriendContext from "../data/friend-context"
export const FRIENDS_DATA = [
    {id: 'f1', name: 'John Thor', imgurl: 'data:image/png;base64,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'},
    {id: 'f2', name: 'John Ness', imgurl: 'data:image/png;base64,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'},
    {id: 'f3', name: 'John Doe', imgurl: 'data:image/png;base64,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'}
]



const Meet: React.FC = () => {
    const [startDeleting, setStartDeleting] = useState(false)
    const [toastMessage, setToastMessage] = useState('')
    const [isEditing, setIsEditing] = useState(false)
    const [isBlocking, setIsBlocking] = useState(false)
    const [idDelete, setIDDelete] = useState('')
    const [selectedFriend, setSelectedFriend] = useState<{id: string, name: string, photo: string} | null>()

    const friendsCtx = useContext(FriendContext)

    const saveFriendHandler = () => {
        const enteredName:any = nameRef.current!.value;
        console.log('id',selectedFriend?.id)
        if(!enteredName) return;
        if(selectedFriend===null || selectedFriend?.id===undefined) {
            friendsCtx.addFriend(enteredName.toString(), '')
            setSelectedFriend(null)
            setIsEditing(false)
            return
        }
        const friend:any = friendsCtx.friends.find(f => f.id === selectedFriend?.id)
        friendsCtx.updateFriend(friend, enteredName)
        setSelectedFriend(null)
        setIsEditing(false)
        
    }

    const startDeleteFriendHandler = (friendID: string) => {
        setIDDelete(friendID)
        setStartDeleting(true)
        slidingOptionsRef.current?.closeOpened()
    }
    
    const callFriendHandler = () => {
        console.log("Calling...")
    }

    const deleteFriendHandler = (friendId: string) => {
        setStartDeleting(false)
      
        friendsCtx.deleteFriend(friendId)
        setToastMessage('Deleted Friend!')
        console.log("Deleting...")
        setIDDelete('')
    }
    const startEditFrinedHandler = (friendId: string) => {
        slidingOptionsRef.current?.closeOpened()
        const friend = friendsCtx.friends.find(f => f.id === friendId)
        setSelectedFriend(friend)
        setIsEditing(true)
        console.log("Editing...")
    }

    const cancelEditFriendHandler = () => {
        setIsEditing(false)
        setSelectedFriend(null)
    }
    
    const slidingOptionsRef = useRef<HTMLIonItemSlidingElement>(null);
    const nameRef = useRef<HTMLIonInputElement>(null)

    const startBlockingHandler = () => {
        setIsBlocking(true)
    }
    
    const blockFriendHandler = () => {
    
        slidingOptionsRef.current?.closeOpened()
       
        setToastMessage('Blocked Friend!')
        console.log("Blocking...")
    }

    const startAddFriendHandler = () => {
        console.log("adding friend...")
        setIsEditing(true)
        setSelectedFriend(null)
    }

    
    return(
        <React.Fragment>

            <IonModal isOpen={isEditing}>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Edit Friend</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonContent>
                    <IonGrid>
                        <IonRow>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position="floating">Friend Name</IonLabel>
                                    <IonInput type="text" ref={nameRef} value={selectedFriend?.name} placeholder='Friend Name' />
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonRow className="ion-text-center">
                            <IonCol>
                                <IonButton fill="clear" color="dark" onClick={cancelEditFriendHandler}>Cancel</IonButton>
                            </IonCol>
                            <IonCol>
                                <IonButton color="secondary" expand="block" onClick={saveFriendHandler}>Save</IonButton>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonContent>
            </IonModal>

            <IonAlert isOpen={startDeleting}
            header="Are you sure?"
            message="Do you want to delete your friend? This cannot be undone"
            buttons={[
                {text: 'No', role: 'cancel', handler: () => {setStartDeleting(false)}},
                {text: 'Yes', handler: deleteFriendHandler.bind(null, idDelete)}
            ]} />

            <IonToast isOpen={!!toastMessage}
            message={toastMessage}
            duration={2000}
            onDidDismiss={() => {setToastMessage('')}} />

            <IonAlert isOpen={isBlocking}
            header="Are you sure?"
            message="Do you want to Block your friend? This cannot be undone"
            buttons={[
                {text: 'No', role: 'cancel', handler: () => {setStartDeleting(false)}},
                {text: 'Yes', handler: blockFriendHandler}
            ]} />

            <IonToast isOpen={!!toastMessage}
            message={toastMessage}
            duration={2000}
            onDidDismiss={() => {setToastMessage('')}} />
        <IonPage>
            
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    {!isPlatform('android') && (

                    <IonButtons slot="end">
                        <IonButton onClick={startAddFriendHandler}>
                            <IonIcon icon={addOutline} />
                        </IonButton>
                    </IonButtons>
                    )}
                    <IonTitle>Meet</IonTitle>
                </IonToolbar>
            </IonHeader>
            
            {isPlatform('android') && (

            <IonFab horizontal="end" vertical="bottom" slot="fixed">
                <IonFabButton color="secondary" onClick={startAddFriendHandler}>
                    <IonIcon icon={addOutline} />
                </IonFabButton>
            </IonFab>
            )}

            <IonContent>
                <IonList>
                    {friendsCtx.friends.map(friend => (
                        <IonItemSliding key={friend.id} ref={slidingOptionsRef}>
                            <IonItemOptions side="start">
                                <IonItemOption color="danger" onClick={startBlockingHandler}>
                                    <IonIcon slot="icon-only" icon={ban} />
                                </IonItemOption>
                                <IonItemOption color="warning" onClick={startDeleteFriendHandler.bind(null,friend.id)}>
                                    <IonIcon slot="icon-only" icon={trash} />
                                </IonItemOption>
                            </IonItemOptions>

                            <IonItemOptions side="end">
                                <IonItemOption color="warning" onClick={startEditFrinedHandler.bind(null,friend.id)}>
                                    <IonIcon slot="icon-only" icon={pencil} />
                                </IonItemOption>
                                <IonItemOption color="success" onClick={startEditFrinedHandler.bind(null,friend.id)}>
                                    <IonIcon slot="icon-only" icon={create} />
                                </IonItemOption>    
                            </IonItemOptions>
                            <IonItem lines="full"
                            button
                            onClick={callFriendHandler}>
                                {/* <IonAvatar slot="start" >
                                    <img src={friend.imgurl} />
                                </IonAvatar> */}
                                <IonLabel>{friend.name}</IonLabel>
                            </IonItem>
                        </IonItemSliding>
                    ))}
                </IonList>
            </IonContent>
        </IonPage>
        </React.Fragment>
    )
}

export default Meet