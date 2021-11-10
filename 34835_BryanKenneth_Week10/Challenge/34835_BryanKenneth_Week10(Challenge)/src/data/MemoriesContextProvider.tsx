import React, {useState, useEffect,useCallback} from 'react'
import {Storage} from '@capacitor/storage'
import MemoriesContext, {Memory} from './memories-context'
import axios from 'axios'
import { Directory, Filesystem } from '@capacitor/filesystem'
import { pathToFileURL } from 'url'

const MemoriesContextProvider: React.FC = props => {
    const urlfetch = "http://localhost/apiChallenge/select_all_memories.php"
    
    const filesystem = Filesystem
    const [memories, setMemories] = useState<Memory[]>([])

    useEffect(() => {
        // console.log('')
        
    //    const storableMemories = memories.map(memory => {
    //        return {
    //            id: memory.id,
    //            title: memory.title,
    //            imagePath: memory.imagePath,
    //            type: memory.type,
    //            lat: memory.lat,
    //            lng: memory.lng
    //        }
    //    })
       
    //    Storage.set({key: 'memories',value: JSON.stringify(storableMemories)})
    }, [memories])

    const initContext = useCallback(async() => {
        const memoriesData = await axios.get(urlfetch)
        const storedMemories =  memoriesData.data.memories ? memoriesData.data.memories : []
        const loadedMemories: Memory[] = []

        for(const storedMemory of storedMemories){
            loadedMemories.push({
                id: storedMemory.id,
                title: storedMemory.title,
                type: storedMemory.type,
                imagePath: storedMemory.imagePath,
                lat: storedMemory.lat,
                lng: storedMemory.lng
            })
        }

        setMemories(loadedMemories)     
    },[])

    
    const addMemory = (path: string, base64Data:string, title: string, type: 'good'|'bad', lat:any, lng:any) => {
        const id = Math.random().toString()
        const newMemory: Memory = {
            id: id,
            title,
            type,
            imagePath: path,
            lat,
            lng
        }
        // console.log(base64Data)
       
        const formData = new FormData()
        formData.append('id',id)
        formData.append('title', title)
        formData.append('type',type)
        formData.append('imagePath',path)
        formData.append('base64Url', base64Data.replace("data:image/png;base64,", ""))
        formData.append('lat',lat)
        formData.append('lng',lng)

        // console.log(lat)
        // console.log(lng)
        const url = "http://localhost/apiChallenge/insert_new_memory.php"
        axios.post(url, formData)
        .then(response => console.log(response))

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