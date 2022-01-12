import React from 'react';
import "../VideoCard.css";
import Avatar from '@mui/material/Avatar';

const VideoCard = ({
            title,
            channel,
            image1,
            image2,
            timestamp,
            views
}) => {
    return (
        <div className="videocard">
        <img className="videocard_image" src={image1} alt="image"/>
        <div className="videocard_content">
        <Avatar alt="Travis Howard" src={image2} />
        <div className="videocard_text">
        <h4>{title}</h4>
        <p>{channel}</p>
        <p>{views} • {timestamp}</p>
        </div>
        </div>
            
        </div>
    )
}

export default VideoCard
