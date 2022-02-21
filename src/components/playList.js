import React,{useState} from "react";
import PlayListUnit from "./playlistunit";
import Video from "./video";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft , faCircle} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useRecoilValue,useRecoilState } from "recoil";
import {playListsAtom,currentListAtom,isSyncedSelector} from '../Atoms/Atoms'
const PlayList = () =>{
    const [videoList,setVideoList] = useState([])
    const playLists = useRecoilValue(playListsAtom);
    const [currentList,setCurrentList] = useRecoilState(currentListAtom);
    const [videosOrList,setVideosOrList] = useState(false);
    const synced = useRecoilValue(isSyncedSelector);
    const toggleHandler = ()=>{
        setVideosOrList(false)
    }
    function syncToggle(){
        setCurrentList((oldList)=>{
            return {...oldList,is_synced:!oldList.is_synced}
        });
        axios.put(`http://127.0.0.1:8000/playlists/${currentList.id}/`,{channel:currentList.channel,description:currentList.description,id:currentList.id,is_synced:!currentList.is_synced,thumbnail:currentList.thumbnail,title:currentList.title})
       
    }
    let inlineStyle;
    let playlistsStyle;
    let syncedStyling;
    
    if(synced){
        syncedStyling={
            color:'green'
        }
    }else{
        syncedStyling={
            color:'red'
        }
    }
    if(videosOrList){
        inlineStyle = {
            transform: 'translateX(0%)'
        }
        playlistsStyle = {
            filter: 'blur(20px)'
        }
    }else{
        inlineStyle = {
            transform: 'translateX(140%)'
        }
        playlistsStyle = {
            filter: 'blur(0px)'
        }
    }
    return (
        
        <div className="listsContainer">
            <div style={playlistsStyle} className="playlistContainer">
            {playLists.map(element=>{
                console.log(element)
               return <PlayListUnit  key={element.id} List={element} setVideoList={setVideoList} 
               setVideosOrList={setVideosOrList} />
            })}
            </div>
            <div style={inlineStyle} className="videoContainer">
                <div className="listHeader">
                <FontAwesomeIcon onClick={toggleHandler} icon={faChevronLeft}  className="backArrow"/>
                <FontAwesomeIcon onClick={syncToggle} style={syncedStyling} icon={faCircle}  className="circleIcon"/>
                </div>
                {
                    videoList.map(video=>{
                        return <Video  key={video.id} video={video} />
                    })
                }
            </div>
        </div>
    );
};


export default PlayList;