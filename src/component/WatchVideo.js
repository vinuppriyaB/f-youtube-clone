import React,{useState,useEffect} from 'react';
import "../WatchVideo.css";
import ReactPlayer from 'react-player/youtube'
import Avatar from '@mui/material/Avatar';
import { useParams } from 'react-router';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import LibraryAddOutlinedIcon from '@mui/icons-material/LibraryAddOutlined';
import Button from '@mui/material/Button';
import { Description } from '@mui/icons-material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

export const WatchVideo = ({videoLink}) => {
console.log(videoLink)
    return (
        <div className="watchVideo"> 
        <iframe 
        className="responsive-iframe" 
        width="1280" height="720" src={videoLink} 
        title="YouTube video player" 
        // frameborder="0" 
        // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen="true" 
        ></iframe>
      
        </div>
        
     
 
        
    )
}

export const VideoDetail = (
    {title,
            view,
            subscriber,
            logo,
            channelName,
            like,
            description,
            timestamp,
            id,
            setLike,
            currentUser
    }) => {
console.log(currentUser);
        const[likeClicked,setLikeClicked]=useState(false);
       const likeUpdate=(id,channelName,clicked)=>{
           console.log(id,channelName)
           const updateOn={
                title:title,
               channelName:channelName,
               clicked:clicked,
           }
           fetch("http://localhost:8000/channel/updatelike",
      {
          method:"PUT",
          body: JSON.stringify(updateOn),
          headers:{"Content-Type":"application/json"},
      }).then((res)=>{
          if(res.status==200)
          {
              if(clicked)
            setLike(like+1);
            else
            setLike(like-1);
            setLikeClicked(!likeClicked)
          }
        
      }).catch((e)=> console.log("ERROR"))  
           
       }
    return (

        <div className="watchVideo_detail">
        <div className="watchVideo_title">
        <p>{title}</p>
        </div>
        <div className="watchvideo_details">
        <div className="watchVideo_views">
        <p><span>{view} views</span> . <span>{timestamp}</span></p>
        </div>
        <div className="watchVideo_like">
        <Button variant="text">
        {likeClicked? <ThumbUpIcon className="watchVideo_icon" onClick={()=>likeUpdate(title,channelName,!likeClicked)}/>:
        <ThumbUpOutlinedIcon className="watchVideo_icon"
        onClick={()=>{

            likeUpdate(title,channelName,!likeClicked)}}
        /> } 
        {like}</Button>
        <Button variant="text"><ThumbDownOutlinedIcon className="watchVideo_icon"/> dislike</Button>
        <Button variant="text"><ShareOutlinedIcon className="watchVideo_icon"/> share</Button>
        <Button variant="text"><LibraryAddOutlinedIcon className="watchVideo_icon"/> save</Button>
        

        
        </div>
        </div>
        <hr/>

        <div className="watchVideo_descriptionRow">
        <Avatar className="videoRow_Avatar"
        alt={channelName} src={logo} />
        <div className="watchVideo_aboutvideo">
        <h4>{channelName}</h4>
        <p>{subscriber} subscribers</p>
        <h4>{description}</h4>
        </div>
        <div>
        <Button variant="contained">subscribe</Button>
        </div>
        
        </div>
        <hr/>
        <div className="watchVideo_command">
        watchVideo_command
        </div>
        <hr/>
        </div>
    )
}
// https://youtu.be/PDotAV4rQVk
// <iframe width="1920" height="1200" src="https://www.youtube.com/embed/-w3H6WUN1mU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>