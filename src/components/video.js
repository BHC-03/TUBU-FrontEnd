import React from "react";
import { useSetRecoilState } from "recoil";
import { videoActiveAtom } from "../Atoms/Atoms";

const Video = ({video})=>{
    const setVideoActive = useSetRecoilState(videoActiveAtom);
    function activateHandler(){
        setVideoActive(true);
    }
    return(
        <div onClick={activateHandler} className="List">
            
            <img src={video.thumbnail} alt="thumbnail" />
            <p className="videoTitle">{video.title}</p>
        </div>
    );
};

export default Video;