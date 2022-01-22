import React from 'react';
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
        id

}

) => {
    const history = useHistory();
    return (
        <div className="videoRow" onClick={()=>history.push(`/watch/${id}`)}>

        <img className="videorow_image"
        src={image1}  alt={title}/>
        <div className="videoRow_textbox">
        <div className="videoRow_text">
        <h4>{title}</h4>
        <p>{views} views {timestamp}</p>
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


        //