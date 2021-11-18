import React,{useEffect,useState} from 'react';
import {getAuth,updateProfile} from 'firebase/auth'
import {useNavigate} from 'react-router-dom';
import { dbService } from 'fbase';
import { where,collection,query,getDocs, orderBy } from '@firebase/firestore';

const Profile =({userObj,refreshUser})=>{
    const history = useNavigate();
    const [newDisplayName,setNewDisplayName] = useState(userObj.displayName);
    const onLogOutClick= () => {
        getAuth().signOut();
        history("/");
        refreshUser();
    };
    const getMyNweets= async ()=>{
        const q = query(collection(dbService,"nweets"),where("creatorId","==",userObj.uid),orderBy("createdAt","desc"));
        const nweets = await getDocs(q);
        nweets.forEach(doc => console.log(doc.id,"=>",doc.data()))
    }
    useEffect(() => {
        getMyNweets();
    }, [])
    const onSubmit = async (e)=>{
       if(userObj.displayName !== newDisplayName){
            await updateProfile(getAuth().currentUser,{
                displayName: newDisplayName,
            })
        refreshUser();
       }
    };
    const onChange = (e) => {
        e.preventDefault();
        const {target:{value}} = e
        setNewDisplayName(value)
    }
    return <>
    <form onSubmit={onSubmit}>
        <input onChange={onChange} value={newDisplayName} type="text" placeholder="Display name"/>
        <input type="submit" value="Update Profile"/>
    </form>
    <button onClick={onLogOutClick}>Log Out</button>
    </>
}
export default Profile
