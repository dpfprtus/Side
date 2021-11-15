import React from 'react';
import {getAuth} from 'firebase/auth'
import {useNavigate} from 'react-router-dom';

const Profile =()=>{
    const history = useNavigate();
    const onLogOutClick= () => {
        getAuth().signOut();
        history("/");
    };
    return <>
    <button onClick={onLogOutClick}>Log Out</button>
    </>
}
export default Profile