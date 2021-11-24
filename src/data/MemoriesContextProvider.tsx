import React, {useState, useEffect,useCallback} from 'react'
import {Storage} from '@capacitor/storage'
import MemoriesContext, {Memory} from './memories-context'
import axios from 'axios'
import { Directory, Filesystem } from '@capacitor/filesystem'
import { pathToFileURL } from 'url'
import {collection, addDoc} from "firebase/firestore"
import {getDownloadURL, getStorage, ref, uploadBytes} from "@firebase/storage"
import { doc, getDocs, getFirestore } from '@firebase/firestore';

const MemoriesContextProvider: React.FC = props => {
    // const urlfetch = "http://localhost/apiChallenge/select_all_memories.php"
    const db = getFirestore()
    const storage = getStorage()
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
        // const storedMemories = []
        const loadedMemories: Memory[] = []
        async function getData(){
            const querySnapshot = await getDocs(collection(db,"memories"))
            console.log('querySnapshot',querySnapshot)
            querySnapshot.docs.map((doc) => {
                const tempdata = doc.data()
                return loadedMemories.push({
                    id: doc.id,
                    title: tempdata.title,
                    type: tempdata.type,
                    imagePath: tempdata.imagePath,
                    lat: tempdata.lat,
                    lng: tempdata.lng,
                    fotoUrl: tempdata.fotoUrl
                })

            })
           
            
            //({...doc.data(), id:doc.id})
            // querySnapshot.forEach((doc) => {
                //   console.log(`${doc.id} => ${doc.data()}`)
                //   console.log('doc: ',doc)
                // })
                setMemories(loadedMemories)     
          }

          getData()
        // const memoriesData = await axios.get(urlfetch)

        // for(const storedMemory of storedMemories){
        //     loadedMemories.push({
        //         id: storedMemory.id,
        //         title: storedMemory.title,
        //         type: storedMemory.type,
        //         imagePath: storedMemory.imagePath,
        //         lat: storedMemory.lat,
        //         lng: storedMemory.lng
        //     })
        // }
        console.log(loadedMemories)
    },[])

    const b64toBlob = (b64Data:any, contentType='', sliceSize=512) => {
        const byteCharacters = atob(b64Data);
        const byteArrays = [];
      
        for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
          const slice = byteCharacters.slice(offset, offset + sliceSize);
      
          const byteNumbers = new Array(slice.length);
          for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
          }
      
          const byteArray = new Uint8Array(byteNumbers);
          byteArrays.push(byteArray);
        }
      
        const blob = new Blob(byteArrays, {type: contentType});
        return blob;
    }

    
    const addMemory = async(path: string, base64Data:string, title: string, type: 'good'|'bad', lat:any, lng:any) => {
       
        const id = Math.random().toString()
        
        const blob = b64toBlob(base64Data.replace("data:image/png;base64,", ""))
        
        const storageRef = ref(storage, path)
        uploadBytes(storageRef, blob as Blob).then((snapshot) => {
            console.log('upload file success')
            getDownloadURL(ref(storage, path)).then(async(url) => {
                try{
                    const docRef = await addDoc(collection(db, "memories"), {
                        title: title,
                        type: type,
                        lat: lat,
                        imagePath: path,
                        lng: lng,
                        fotoUrl: url
                    })
                    console.log("Document written with ID: ", docRef.id)
                    if(type==='good'){

                        window.location.href="/"
                    } else {
                        window.location.href="/badMemories"
                    }
                    
                } catch (e) {
                    console.error("Error adding document: ", e)
                }
            })
        })
        // console.log(base64Data)
        
       
        // const formData = new FormData()
        // formData.append('id',id)
        // formData.append('title', title)
        // formData.append('type',type)
        // formData.append('imagePath',path)
        // formData.append('base64Url', base64Data.replace("data:image/png;base64,", ""))
        // formData.append('lat',lat)
        // formData.append('lng',lng)

        // // console.log(lat)
        // // console.log(lng)
        // const url = "http://localhost/apiChallenge/insert_new_memory.php"
        // axios.post(url, formData)
        // .then(response => console.log(response))
        
        // setMemories(curMemories => {
        //     return [...curMemories, newMemory]
        // })
    }
    return(
        <MemoriesContext.Provider value={{memories, addMemory,initContext}}>
            {props.children}
        </MemoriesContext.Provider>
    )
}

export default MemoriesContextProvider