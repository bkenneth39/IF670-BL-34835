import React, {useState} from "react";
import FriendsContext, {Friend} from "./friend-context"

const FriendsContextProvider: React.FC = props => {
    const [friends, setFriends] = useState<Friend[]>([
        {
            id: 'f1',
            name: 'John Thor',
            photo: ''
        }
    ]);

    const addFriend = (name: string, photo: string) => {
        const newFriend: Friend = {
            id: Math.random().toString(),
            name: name,
            photo: photo
        }

        setFriends((currFriends: Friend[]) => {
            return currFriends.concat(newFriend)
        })
    }

    const updateFriend = (friend: Friend, newValue: any) => {
        friend.name = newValue
    }
    const deleteFriend = (id: string) => {
        for(let i=0;i<friends.length;i++){
            if(friends[i].id === id){
                friends.splice(i,1)
            }
        }
    }

    return(
        <FriendsContext.Provider value={{
            friends,
            addFriend,
            updateFriend,
            deleteFriend
        }}>
            {props.children}
        </FriendsContext.Provider>
    )


}

export default FriendsContextProvider