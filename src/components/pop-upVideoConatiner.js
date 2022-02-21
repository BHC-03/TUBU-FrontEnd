import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useRecoilState } from "recoil";
import { videoActiveAtom } from "../Atoms/Atoms";
const Pop_upvideoContainer = ()=>{
    const [videoActive,setVideoActive] = useRecoilState(videoActiveAtom);
    let PopUpStyling;
    if(videoActive){
        PopUpStyling={
            transform: 'translateY(0%)',
            opacity:1,
            pointerEvents:'all'
        }
    }else{
        PopUpStyling={
            transform: 'translateY(10%)',
            opacity:0,
            pointerEvents:'none'
        }
    }
    function closingHandler(){
        setVideoActive(false)
    }
    return(
        <div className="pop_ipvideoContainer" style={PopUpStyling}>
            <div className="videoContianerIcons"><FontAwesomeIcon onClick={closingHandler} className="closeIcon" icon={faTimes} size='2x'/></div>
            <div className="video">
            <iframe className="theVideo" width="1060" height="515" src="https://www.youtube.com/embed/k0INA2gGDUE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className="videoInfo">
                <div className="titleAndChannel">
                    <p>Channel</p>
                    <p>Title</p>
                </div>
                <div className="videoDiscription">
                    Discription:
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sed possimus vitae fugit culpa quas officia, minus officiis quidem natus nemo rerum accusamus, consectetur saepe tempora beatae repellat velit ab!
                </div>
            </div>
        </div>
    );
};


export default Pop_upvideoContainer;