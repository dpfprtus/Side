import React,{useState} from 'react';
import {doc,deleteDoc,updateDoc} from 'firebase/firestore';
import { dbService,storageService } from 'fbase';
import {ref,deleteObject} from 'firebase/storage'

const Nweet = ({nweetObj,isOwner})=>{
    const [editing,setEditing] = useState(false);
    const [newNweet,setNewNweet] = useState(nweetObj.text);

    const onDeleteClick = async (e)=>{
        const ok = window.confirm("Are you sure you want to delete this nweet?");
        if(ok){
            await deleteDoc(doc(dbService,`/nweets/${nweetObj.id}`))
            if(nweetObj.attachmentURL !== ""){
            await deleteObject(ref(storageService,nweetObj.attachmentURL))
        }}
    }
    const onSubmit= async (e)=>{
        e.preventDefault();
        await updateDoc(doc(dbService,`/nweets/${nweetObj.id}`),{
            text:newNweet,
        })
        setEditing(false);
    }
    const onChange = (e) =>{
        const {target:{value}} = e;
        setNewNweet(value);
    }
    const toggleEditting = () => setEditing(prev=>!prev);
   return (
       <div>
       {editing ? (
           <>
           
           <button onClick={toggleEditting}>Cancel</button>
           </>
       )
    
    :(<>
        <div>
        <h4>{nweetObj.text}</h4>
        {nweetObj.attachmentURL && <img src={nweetObj.attachmentURL} width="50px" height="50px"/>}
        {isOwner &&(
        <>
        <button onClick={onDeleteClick}>Delete Nweet</button>
        <button onClick={toggleEditting}>Edit Nweet</button>
        </>
        
        )}
    </div>
    </>
    )
    }
    </div>
   )
       
};

export default Nweet;