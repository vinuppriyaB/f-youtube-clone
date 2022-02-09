import React,{useState,useEffect} from 'react';
import {WatchVideo,VideoDetail} from './WatchVideo';
import "../WatchPage.css";
import RelatedVideo from './RelatedVideo';
import { useParams } from 'react-router';


const data=[{
    "channelName":"database",
    "email":"Mongodb@gmail.com",
    "password":"mongo",
    "ChannelMoto":"In this video, we’ll take a deeper look at MongoDB Atlas, our Database-as-a-Service. I’ll show you how to sign up, create your first cluster, load some sample data, and view your data from a really cool VS Code extension. All for FREE!",
    "subscriber":23,
    "logo":"https://yt3.ggpht.com/94s5L5iEC6TInISXIFzVaVCaFgL62lEmSz3c9p2AHnjv7kmNAOXdWrgyndV-jttIC31K7AWWJw=s176-c-k-c0x00ffffff-no-rj",
    "video":[
    {
        "id":"7",
        "title":"MongoDB Atlas Search to Easily Find Your Data | Search & Autocomplete Implementation | Jumpstart",
        "timestamp":"Premiered Sep 8, 2021",
       
        "imageLink":"https://i.ytimg.com/an_webp/jnxnhbTO2RA/mqdefault_6s.webp?du=3000&sqp=COCblY8G&rs=AOn4CLCgn4HwKojhj7MyZwj-j5KkQx2SzQ",
        "videoLink":"https://www.youtube.com/embed/jnxnhbTO2RA", 
        "views":139,
        "like":511,
        "description":"Welcome back to the MongoDB Jumpstart series. Have you ever wondered how searches work on websites? What about autocomplete? In this video, we are going to implement search and autocomplete in our e-commerce app utilizing MongoDB Atlas Search. ",
        "tag":"mongodb"
    }

    ]

    }]

const WatchPage = ({searchItem,setSearchItem,currentUser,setCurrentUser,userName,userEmail,profilePic}) => {
    // console.log(userName,userEmail,profilePic)
    const {watchitem} =useParams();
    const [videoLink,setVideoLink]=useState("");
    const [title,setTitle]=useState("");
    const [view,setViews]=useState("");
    const [subscriber,setSubscriber]=useState("");
    const [logo,setLogo]=useState("");
    const [channelName,setChannelName]=useState("");
    const [like,setLike]=useState("");
    const [dislike,setDisLike]=useState("");
    const [description,setDescription]=useState("");
    const [timestamp,setTimestamp]=useState("");
    const [id,setId]=useState("");
    // const [profilePic,setProfilePic]=useState("");
    const [allComment,setAllcomment]=([]);

    const [watchVideo,setWatchVideos]=useState([]);
    useEffect(()=> getchannel(),[watchitem])
let video=[];
let commenttext=[];
    const getchannel=()=>{
         fetch(`https://youtubeclonee.herokuapp.com/channel/watchvideo/${watchitem}`,
        {method:"GET",})
        .then((data)=>data.json())
        .then((res)=>{
            // console.log(res);
            setChannelName(res[0].channelName);
            setSubscriber(res[0].subscriber)
            setTitle(res[0].video.title);
            setViews(res[0].video.views);
            setLogo(res[0].logo);
            setLike(res[0].video.like)
            setDisLike(res[0].video.dislike)
            setVideoLink(res[0].video.videoLink)
            setTimestamp(res[0].video.timestamp)
            setDescription(res[0].video.description)
            setId(res[0].video._id)
            // console.log(res[0].video.comment.length);
            for(let i=0;i<res[0].video.comment.length;i++)
            {
                let temp=res[0].video.comment[i];
                commenttext[i]={...temp};
            }


        });
               
      }
    //   console.log(commenttext);
    return (
        <div className="watch_page">
        <div className="watch_video_detail">
            <WatchVideo 
            videoLink={videoLink}
            />
            <VideoDetail
            title={title}
            view={view}
            subscriber={subscriber}
            logo={logo}
            channelName={channelName}
            like={like}
            dislike={dislike}
            description={description}
            timestamp={timestamp}
            id={id}
            setLike={setLike}
            setDisLike={setDisLike}
            currentUser={currentUser} 
            setCurrentUser={setCurrentUser}
            allComment={allComment}
            userName={userName}
            userEmail={userEmail}
            profilePic={profilePic}
            setSubscriber={setSubscriber}
            />
            

            
        </div>
        <div className="related_video_detail">
        <RelatedVideo

        />
        </div>

        </div>
    )
}

export default WatchPage

