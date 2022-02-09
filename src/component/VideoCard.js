import React,{useState,useEffect} from 'react';
import "../VideoCard.css";
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

const VideoCard = ({
            title,
            channel,
            image1,
            image2,
            timestamp,
            views,
            id,
}) => {
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
        
        <div className="videocard" onClick={()=>{
            viewUpdate(title,channel)
            history.push(`/watch/${id}`)
        }}>
        <img className="videocard_image" src={image1} alt="image"/>
        <div className="videocard_content">
        <Avatar alt="Travis Howard" src={image2} />
        <div className="videocard_text">
        <h4>{title}</h4>
        <p>{channel}</p>
        <p>{views} views • {date}</p>
        </div>
        </div>
            
        </div>

    )
}

export default VideoCard
