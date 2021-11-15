import React,{useState} from 'react';
import App from '../components/App';
import firebase, { authService, firebaseInstance } from '../fbase';
import {signInWithPopup,getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword,GoogleAuthProvider,GithubAuthProvider} from "firebase/auth"

const Auth = ()=> {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [newAccount,setNewAccount] = useState(true);
    const [error,setError] = useState("");

    const onChange = (e)=> {
        const {target:{name,value}} = e;
        if(name === "email"){
            setEmail(value);
        }else if(name ==="password"){
            setPassword(value);
        }
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        const auth = getAuth();
        try{
            let data;
            if(true){
                data = await createUserWithEmailAndPassword(auth,email, password)
            }else{
                data = await signInWithEmailAndPassword(auth, email, password)
            }
        }
        catch(error){
            setError(error.message);
        }
    }
    const toggleAccount = () => setNewAccount(prev => !prev);
    
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
        <form onSubmit={onSubmit}>
            <input name="email" type="text" placeholder="Email" required value={email} onChange={onChange}/>
            <input name="password" type="password" placeholder="Password" required value={password} onChange={onChange}/>
            <input type="submit" value={newAccount ? "Create Account" : "Log In"}/>
        </form>
        {error}
        <span onClick={toggleAccount}>{newAccount ? "Sign In" : "Log In"}</span>
        <div>
            
            <button onClick={onSocialClick} name="google">Continue with Google</button>
            <button onClick={onSocialClick} name="github">Continue with Github</button>
        </div>
    <script src="https://www.gstatic.com/firebasejs/4.10.1/firebase.js"></script>

    </div>
    )
}

export default Auth;