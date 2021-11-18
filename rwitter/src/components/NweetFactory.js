import React,{useState,useRef} from 'react';
import { storageService,dbService } from 'fbase';
import { v4 as uuidv4 } from 'uuid';
import { addDoc,collection } from 'firebase/firestore';
import { ref,uploadString,getDownloadURL } from "firebase/storage";



const NweetFactory = ({userObj})=>{
    const [nweet,setNweet] = useState("");
    const [attachment,setAttachment] = useState("");
    const fileInput = useRef();
    const onSubmit = async (e)=>{
    e.preventDefault();
    let attachmentURL="";
    if (attachment !== ""){
        const attachmentRef = ref(storageService,`${userObj.uid}/${uuidv4()}`);
        const response = await uploadString(attachmentRef,attachment,"data_url")
        attachmentURL = await getDownloadURL(attachmentRef);
    }
    const nweetObj = {
        text:nweet,
        createdAt: Date.now(),
        creatorId: userObj.uid,
        attachmentURL,
    }
     await addDoc(collection(dbService,"nweets"),nweetObj);
     setNweet("");
     setAttachment("");
}

const onChange = (e) => {
    const {target:{value}} = e;
    setNweet(value);
}
const onFileChange = (e)=>{
    
    const {target:{files}} = e;
    const theFile = files[0];
    const reader = new FileReader();
    reader.onloadend = (e)=>{
        const {currentTarget:{result}} = e;
        setAttachment(result)
    }
    reader.readAsDataURL(theFile);

}
const onClearAttachment = ()=> {
    setAttachment("")
    fileInput.current.value=null;
}
    return (
        <form onSubmit={onSubmit}>
            <input onChange={onChange} type="text" placeholder="What's on yout mind?" maxLength={120} value={nweet}/>
            
            <input type="file" accept="image/*" onChange={onFileChange}/>
            <input type="submit" value="Nweet"/>
            {attachment &&
            <div> 
            <img alt="err" src={attachment} width="50px" height="50px" ref={fileInput}/>
            <button onClick={onClearAttachment}>Clear</button>
            </div>}
        </form>
    )
}

export default NweetFactory;