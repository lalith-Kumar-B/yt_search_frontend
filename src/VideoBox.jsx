import React from 'react'
import Video from './components/Video'
import { video_ids_arr } from './store/atoms.js'
import {useRecoilValueLoadable} from 'recoil'
function VideoBox() {
    const videos = useRecoilValueLoadable(video_ids_arr);
    console.log(videos);
    if(videos.state == 'hasValue'){
        return(
            <div style={{display : "flex",flexDirection : "row", flexWrap : "wrap", marginTop :"2rem", gap : "5px"}}>
                {videos.contents.map((i,j)=>< Video id={j} video_id={i}/>)}
            </div>
        )
    }else if(videos.state == 'loading'){
        return <div>Loading ...</div>
    }
}

export default VideoBox
