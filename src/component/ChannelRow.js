import React from 'react';
import "../ChannelRow.css";
import Avatar from '@mui/material/Avatar';


const ChannelRow = ({
        image,
        channelName,
        subscribers,
        noOfVideos,
        verified,
        description
}) => {
    return (
        <>
        <div className="channelRow">
        <Avatar className="channelRow_logo"
        alt="Travis Howard" src={image} />
        <div className="ChannelRow_text">
        <h4>{channelName}</h4>
        <p>{subscribers} subscribers . {noOfVideos} videos</p>
        <p>{description}</p>
        
          </div>  
          
        </div>
        <hr/>
        </>
    )
}

export default ChannelRow
