import React,{useState} from 'react';
import App from '../components/App';
import firebase, { authService, firebaseInstance } from '../fbase';
import {signInWithPopup,getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword,GoogleAuthProvider,GithubAuthProvider} from "firebase/auth"
import AuthForm from 'components/AuthForm';

const Auth = ()=> {
 

    
 
    
    const onSocialClick = async (e)=>{
        const {target:{name}} = e;
        let provider;
        if(name === "google"){
            provider = new GoogleAuthProvider();
            
        }else if(name ==="github"){
            provider = new GithubAuthProvider();
        }
        await signInWithPopup(authService,provider);
    };
    return (
    <div>
        <AuthForm/>
        <div>
            
            <button onClick={onSocialClick} name="google">Continue with Google</button>
            <button onClick={onSocialClick} name="github">Continue with Github</button>
        </div>
    <script src="https://www.gstatic.com/firebasejs/4.10.1/firebase.js"></script>

    </div>
    )
}

export default Auth;