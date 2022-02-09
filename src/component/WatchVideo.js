import React,{useState,useEffect} from 'react';
import "../WatchVideo.css";
import ReactPlayer from 'react-player/youtube'
import Avatar from '@mui/material/Avatar';
import { useParams } from 'react-router';

import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import LibraryAddOutlinedIcon from '@mui/icons-material/LibraryAddOutlined';
import Button from '@mui/material/Button';
import { Description } from '@mui/icons-material';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Comment from "./Comment";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

export const WatchVideo = ({videoLink}) => {

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
    {       title,
            view,
            subscriber,
            logo,
            channelName,
            like,
            description,
            timestamp,
            id,
            setLike,
            currentUser,
            userName,
            userEmail,
            profilePic,
            allComment,
            setSubscriber,
            setDisLike,
            dislike
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



        const [likeClicked,setLikeClicked]=useState(false);
        const [unLikeClicked,setUnLikeClicked]=useState(false);
        const [subscribed,setSubscribed]=useState(false);
        const [select,setSelect]=useState(false);
        const [open, setOpen] = useState(false);
        
        const handleOpen = () => {
          setOpen(true);
        };
        const handleClose = () => {
          setOpen(false);
        };
      
        

        const checksubscription=() => {
            const updateOn={
                email:userEmail,
                channelName:channelName,
               
           }
            fetch("https://youtubeclonee.herokuapp.com/register/checkforsubscription",
            {
                method:"PUT",
                body: JSON.stringify(updateOn),
                headers:{"Content-Type":"application/json"},
            }).then((data)=>data.json())
                .then((res)=>{
                    // console.log(res)
                if(res.msg=="subscribed")
                {
                 setSubscribed(true)
                }
                else
                {
                 setSubscribed(false)
                }
              
            }).catch((e)=> console.log(e))
        }
        useEffect(()=> checksubscription(),[title]);


       const likeUpdate=(id,channelName,clicked)=>{
        //    console.log(id,channelName)
           const updateOn={
                title:title,
               channelName:channelName,
               clicked:clicked,
           }
           fetch("https://youtubeclonee.herokuapp.com/channel/updatelike",
      {
          method:"PUT",
          body: JSON.stringify(updateOn),
          headers:{"Content-Type":"application/json"},
      }).then((res)=>{
          if(res.status==200)
          {
              if(clicked)
              {
                setLike(like+1);
                setSelect(true); 
              }
            else
            {
                setLike(like-1);
            }
            setLikeClicked(!likeClicked)
          }
        
      }).catch((e)=> console.log("ERROR"))  
           
       }

       const unLikeUpdate=(id,channelName,clicked)=>{
        // console.log(id,channelName)
        const updateOn={
             title:title,
            channelName:channelName,
            clicked:clicked,
        }
        fetch("https://youtubeclonee.herokuapp.com/channel/updatedisLike",
   {
       method:"PUT",
       body: JSON.stringify(updateOn),
       headers:{"Content-Type":"application/json"},
   }).then((res)=>{
       if(res.status==200)
       {
           if(clicked)
           setDisLike(dislike+1);
         else
         setDisLike(dislike-1);
         setUnLikeClicked(!unLikeClicked)
       }
     
   }).catch((e)=> console.log("ERROR"))  
        
    }



       const addsubscribedCannel=(userEmail,channelName)=>{
        

            const updateOn={
                email:userEmail,
                channelName:channelName,
                logo:logo,
                
            }
            // console.log(updateOn);
            fetch("https://youtubeclonee.herokuapp.com/register/addchannel",
       {
           method:"POST",
           body: JSON.stringify(updateOn),
           headers:{"Content-Type":"application/json"},
       }).then((res)=>{
        //    console.log(res);
        //    setSubscribed(true);
       }).catch((e)=> console.log("ERROR"))  
       }

    const unsubscribeChannel=(userEmail,channelName)=>{
        const updateOn={
            email:userEmail,
            channelName:channelName,
            
        }
            fetch("https://youtubeclonee.herokuapp.com/register/unsubscribechannel",
            {
                method:"PUT",
                body: JSON.stringify(updateOn),
                headers:{"Content-Type":"application/json"},
            }).then((res)=>{
                handleClose();
                // console.log(res);
                // setSubscribed(false)
                
            }).catch((e)=> console.log("ERROR")) 


       }
       const updatesubcribtion=(userEmail,channelName,status)=>{
        const updateOn={
            channelName:channelName,
            subscribed:status
            
        }
       
            fetch("https://youtubeclonee.herokuapp.com/channel/updatesubcription",
            {
                method:"PUT",
                body: JSON.stringify(updateOn),
                headers:{"Content-Type":"application/json"},
            }).then((res)=>{
                
                if(res.status==200)
                {
                   
                    if(subscribed)
                    {
                        setSubscriber(subscriber-1)
                        setSubscribed(!subscribed)
                       
                    }
                    
                    else
                    {
                        setSubscriber(subscriber+1)
                        setSubscribed(!subscribed)
                       
                    }
                    
                }
                
            }).catch((e)=> console.log(e)) 


       }

    return (

        <div className="watchVideo_detail">
        <div className="watchVideo_title">
        <h3>{title}</h3>
        </div>
        <div className="watchvideo_details">
        <div className="watchVideo_views">
        <p><span>{view} views</span> . <span>{date}</span></p>
        </div>
        <div className="watchVideo_like">
        <Button variant="text">
        {likeClicked? <ThumbUpIcon className="watchVideo_icon" 
        onClick={()=>{
            
                likeUpdate(title,channelName,!likeClicked)  

        }}/>:
        <ThumbUpOutlinedIcon className="watchVideo_icon"
        onClick={()=>{
            if(unLikeClicked)
            {
                likeUpdate(title,channelName,!likeClicked)
                unLikeUpdate(title,channelName,!unLikeClicked)
            }
            else{
                likeUpdate(title,channelName,!likeClicked)
            }
            
        }}
        /> } 
        {like}</Button>
        <Button variant="text">
        {unLikeClicked? <ThumbDownIcon className="watchVideo_icon" 
        onClick={()=>{
            
                unLikeUpdate(title,channelName,!unLikeClicked)

        }}/>:
        <ThumbDownOutlinedIcon className="watchVideo_icon"
        onClick={()=>{
            if(likeClicked)
            {
                unLikeUpdate(title,channelName,!unLikeClicked)
                likeUpdate(title,channelName,!likeClicked)
            }else{
                unLikeUpdate(title,channelName,!unLikeClicked)
            }
        }}
            
        /> } 
        {dislike}</Button>
       
        <Button variant="text"><ShareOutlinedIcon className="watchVideo_icon"/> share</Button>
        <Button variant="text"><LibraryAddOutlinedIcon className="watchVideo_icon"/> save</Button>
        
        
        
        </div>
        </div>
        <hr/>

        <div className="watchVideo_descriptionRow">
        <Avatar className="watchVideo_Avatar"
        alt={channelName} src={logo} />
        <div className="watchVideo_aboutvideo">
        <h5>{channelName}</h5>
        <p>{subscriber} subscribers</p>
        <h4>{description}</h4>
        </div>
        <div>
        {subscribed? <Button variant="text"
        className="subscribe_btn"
        onClick={handleOpen}
        >subscribed</Button> : <Button variant="text"
        className="btn_color"
        onClick={()=>{
            updatesubcribtion(userEmail,channelName,!subscribed)
            addsubscribedCannel(userEmail,channelName)}}
        >subscribe</Button>}
        <Modal
        open={open}
        onClose={handleClose}

      >
        <Box sx={{ ...style, width: 400 }}>
          <h3 >Unsubscribe from {channelName} ?</h3>
          
          <Button onClick={handleClose} >cancel</Button>
          <Button onClick={()=>{
            updatesubcribtion(userEmail,channelName,!subscribed)
              unsubscribeChannel(userEmail,channelName)}}
          >unsubscribe</Button>
          

        </Box>
      </Modal>
        </div>
        
        </div>
        <hr/>
        <div className="watchVideo_command">

            <Comment
            channelName={channelName}
            currentUser={currentUser}
            title={title}
            userName={userName}
            userEmail={userEmail}
            profilePic={profilePic}
            allComment={allComment}
            />
        
        </div>

        </div>
    )
}
// https://youtu.be/PDotAV4rQVk
// <iframe width="1920" height="1200" src="https://www.youtube.com/embed/-w3H6WUN1mU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>