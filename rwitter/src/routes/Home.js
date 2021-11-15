import React,{useState} from 'react';
import { dbService } from 'fbase';
import { addDoc,collection } from 'firebase/firestore';

const Home =()=>{
    const [nweet,setNweet] = useState("");
    const onSubmit = (e)=>{
        e.preventDefault();
        dbService.collection("nweet").addDoc({
            nweet,
            createAt: Date.now()
        })
        setNweet("");
    }
    const onChange = (e) => {
        const {target:{value}} = e;
        setNweet(value);
    }
    return <div>
        <form onSubmit={onSubmit}>
            <input onChange={onChange} type="text" placeholder="What's on yout mind?" maxLength={120} value={nweet}/>
            <input type="submit" value="Nweet"/>
            
        </form>
    </div>
}
export default Home;