import React,{useState,useEffect} from 'react';
import { dbService } from 'fbase';
import { addDoc,collection,getDocs,query } from 'firebase/firestore';

const Home =()=>{
    const [nweet,setNweet] = useState("");
    const [nweets,setNweets] = useState([]);
    const getNweets = async()=>{
        const dbNweets = await getDocs(query(collection(dbService,"nweets")));
        dbNweets.forEach((document)=>{
            const nweetObject = {
                ...document.data(),
                id: document.id,
            };
            setNweets((prev) => [nweetObject,...prev]);
            console.log(nweets)
        });
        
    };
    useEffect(() => {
        getNweets();
    
    }, [])
    const onSubmit = async (e)=>{
        e.preventDefault();
        await addDoc(collection(dbService,"nweets"),{
            nweet,
            createdAt: Date.now(),
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
        <div>
            {nweets.map((nweet)=>(
                <div key={nweet.id}>
                    <h4>{nweet.id}</h4>
                </div>
                
            ))
            }
        </div>
    </div>
}
export default Home;