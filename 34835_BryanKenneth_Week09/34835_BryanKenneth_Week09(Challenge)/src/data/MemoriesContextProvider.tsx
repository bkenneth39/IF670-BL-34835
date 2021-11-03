import React, {useState, useEffect,useCallback} from 'react'
import {Storage} from '@capacitor/storage'
import MemoriesContext, {Memory} from './memories-context'
import { Directory, Filesystem } from '@capacitor/filesystem'

const MemoriesContextProvider: React.FC = props => {
    
    const filesystem = Filesystem
    const [memories, setMemories] = useState<Memory[]>([])

    useEffect(() => {
        
       const storableMemories = memories.map(memory => {
           return {
               id: memory.id,
               title: memory.title,
               imagePath: memory.imagePath,
               type: memory.type,
               lat: memory.lat,
               lng: memory.lng
           }
       })
       
       Storage.set({key: 'memories',value: JSON.stringify(storableMemories)})
    }, [memories])

    const initContext = useCallback(async() => {
        const memoriesData = await Storage.get({key: 'memories'})
        const storedMemories = memoriesData.value ? JSON.parse(memoriesData.value) : []
        const loadedMemories: Memory[] = []

        for(const storedMemory of storedMemories){
            const file = await filesystem.readFile({
                path: storedMemory.imagePath,
                directory: Directory.Data
            })
            loadedMemories.push({
                id: storedMemory.id,
                title: storedMemory.title,
                type: storedMemory.type,
                imagePath: storedMemory.imagePath,
                base64Url: 'data:image/jpeg;base64,'+file.data,
                lat: storedMemory.lat,
                lng: storedMemory.lng
            })
        }
        setMemories(loadedMemories)
    },[])

    
    const addMemory = (path: string, base64Data:string, title: string, type: 'good'|'bad', lat:any, lng:any) => {
        const newMemory: Memory = {
            id: Math.random().toString(),
            title,
            type,
            imagePath: path,
            base64Url: base64Data,
            lat,
            lng
        }
        console.log(lat)
        console.log(lng)
        setMemories(curMemories => {
            return [...curMemories, newMemory]
        })
    }
    return(
        <MemoriesContext.Provider value={{memories, addMemory,initContext}}>
            {props.children}
        </MemoriesContext.Provider>
    )
}

export default MemoriesContextProvider