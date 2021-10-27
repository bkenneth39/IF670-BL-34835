import React from "react";

export interface Friend {
    id: string,
    name: string,
    photo: string
}

interface Context {
    friends: Friend[];
    addFriend: (friendName: string, friendPhoto: string) => void,
    updateFriend: (friend: Friend, newValue: any) => void
    deleteFriend: (friend: string) => void
}

const FriendContext = React.createContext<Context>({
    friends: [],
    addFriend: () => {},
    updateFriend: () => {},
    deleteFriend: () => {}
})

export default FriendContext