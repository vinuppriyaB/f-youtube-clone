import React from 'react';
import "../VideoRow.css";
import Avatar from '@mui/material/Avatar';


const VideoRow = (
    {
        title,
        channel,
        image1,
        image2,
        timestamp,
        views,
        description

}
) => {
    return (
        <div className="videoRow">

        <img className="videorow_image"
        src={image1} alt={title}/>
        <div className="videoRow_text">
        <h4>{title}</h4>
        <p>{views} views {timestamp}</p>
        <div className="videoRow_channel">
        <Avatar className="videoRow_Avatar"
        alt={channel} src={image2} />
        <p>{channel}</p>
        </div>
        

        <p> {description}</p>
        </div>


            
        </div>
    )
}

export default VideoRow
