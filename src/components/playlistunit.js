import React from "react";
import axios from "axios";
import { useSetRecoilState } from "recoil";
import { currentListAtom } from "../Atoms/Atoms";
const PlayListUnit = ({List,setVideoList,setVideosOrList})=>{
    const setCurrentList = useSetRecoilState(currentListAtom);
    
    function chooseListHandler(){
        axios.post('http://127.0.0.1:8000/videos/fetch/',{playlist_id:List.id})
        .then(data=>{
            setVideosOrList(true);
            setVideoList(data.data)
        }).catch(err=> console.log(err))
        setCurrentList(List);       
    }
    return(
        <div className="List" onClick={chooseListHandler}>
            <div className="hey">
                <img src={List.thumbnail} alt="yellow" />
                <p className="title">{List.title}</p>
            </div>
            <div className="discription">
                <p>discription:</p>
                <p>{List.description}</p>
            </div>
        </div>
    )
}
export default PlayListUnit;