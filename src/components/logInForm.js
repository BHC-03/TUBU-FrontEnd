import React,{useState} from "react";
import axios from "axios";
import { useSetRecoilState } from "recoil";
import { playListsAtom } from "../Atoms/Atoms";
const LoginForm = ()=>{
    const setPlayLists = useSetRecoilState(playListsAtom);
    const [channelUrl,setChannelId] = useState('');
    const clickHandler = ()=>{
        axios.post('http://127.0.0.1:8000/playlists/fetch/',{channel_id:channelUrl.split('/')[4]},)
        .then(data => {
            setPlayLists(data.data);
            // console.log(playLists)
        })
        .catch(err => console.log(err))
      
    }
    const changeHandler = (e)=>{
        setChannelId(e.target.value)
    }
    return (
        <div className="loginForm">
            <h3>Channel URL</h3>
            <input onChange={changeHandler} value={channelUrl} type="text" name="channelUrl" id="" placeholder="Enter your channel url"/>
            <button onClick={clickHandler} className="submitButton">Submit</button>
        </div>
        
    )
}
export default LoginForm;