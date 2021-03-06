import React,{useState} from 'react';
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth';

const AuthForm = ()=>{
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [newAccount,setNewAccount] = useState(true);
    const [error,setError] = useState("");
    const toggleAccount = () => setNewAccount(prev => !prev);
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
    const onChange = (e)=> {
        const {target:{name,value}} = e;
        if(name === "email"){
            setEmail(value);
        }else if(name ==="password"){
            setPassword(value);
        }
    }
    
    return (
        <>
        <form onSubmit={onSubmit}>
            <input name="email" type="text" placeholder="Email" required value={email} onChange={onChange}/>
            <input name="password" type="password" placeholder="Password" required value={password} onChange={onChange}/>
            <input type="submit" value={newAccount ? "Create Account" : "Log In"}/>
        </form>
        {error}
        <span onClick={toggleAccount}>{newAccount ? "Sign In" : "Log In"}</span>
    </>
    )
}

export default AuthForm