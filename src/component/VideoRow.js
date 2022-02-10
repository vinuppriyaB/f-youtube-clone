import React,{useState,useEffect} from 'react';
import "../VideoRow.css";
import Avatar from '@mui/material/Avatar';
import { useHistory } from 'react-router';

const VideoRow = (
    {
        title,
        channel,
        image1,
        image2,
        timestamp,
        views,
        description,
        id,
        videoLink

}


) => {
    let temp=timestamp.split(" ");
    let date="";
    if(temp.length>3)
    {
     date=temp[1]+" "+temp[2]+","+temp[3];
    }
    else{
       date=timestamp;
    }
    const history = useHistory();
    const [view,setView]=useState(views)
    const [hover,setHover]=useState(false);
    const viewUpdate=(title,channelName)=>{
        // console.log(id,channelName)
        const updateOn={
             title:title,
            channelName:channel,
            
        }
            fetch("https://youtubeclonee.herokuapp.com/channel/updateview",
            {
                method:"PUT",
                body: JSON.stringify(updateOn),
                headers:{"Content-Type":"application/json"},
            }).then((res)=>{
                if(res.status==200)
                {
                    setView(view+1)
                }
                
            }).catch((e)=> console.log("ERROR"))  
        
    }



    return (
        <div className="videoRow" onClick={()=>{
            viewUpdate(title,channel)
            history.push(`/watch/${id}`)

        }}
        onMouseOver={()=>setHover(true)}
        onMouseOut={()=>setHover(false)}
        >

        {hover?<iframe
            frameborder="0" 
            style={{pointerEvents:"none"}}
            src={`${videoLink}?autoplay=1;&mute=1;&controls=0`}
                // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>:
            <iframe

            src={videoLink} 
            frameborder="0" 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            
            ></iframe>}
        <div className="videoRow_textbox">
        <div className="videoRow_text">
        <h4>{title}</h4>
        <p>{views} views {date}</p>
        <div className="videoRow_channel">
        <Avatar className="videoRow_Avatar"
        alt={channel} src={image2} />
        <p>{channel}</p>
        </div>
        
        <p className="videoRow_description"> {description}</p>
        </div>
        </div>


            
        </div>
    )
}

export default VideoRow


    