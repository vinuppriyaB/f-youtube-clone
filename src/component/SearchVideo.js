import React,{useState,useEffect} from 'react';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import "../SearchVideo.css";
import ChannelRow from "./ChannelRow";
import VideoRow from './VideoRow';
import { Link } from 'react-router-dom';
import axios from "axios";
import { useParams } from "react-router-dom";
import VideoCard from './VideoCard';


// const channel=[
//     {
//         "_id": "61e58d55edfc8fda3aa05bfd",
//         "channelName": "MongoDB",
//         "email": "Mongodb@gmail.com",
//         "password": "Mongodb@gmail.com",
//         "ChannelMoto": "In this video, we’ll take a deeper look at MongoDB Atlas, our Database-as-a-Service. I’ll show you how to sign up, create your first cluster, load some sample data, and view your data from a really cool VS Code extension. All for FREE!",
//         "subscriber": 23,
//         "logo": "https://yt3.ggpht.com/94s5L5iEC6TInISXIFzVaVCaFgL62lEmSz3c9p2AHnjv7kmNAOXdWrgyndV-jttIC31K7AWWJw=s176-c-k-c0x00ffffff-no-rj",
//         "__v": 0,
//         "video": [
//             {
//                 "id": "1",
//                 "title": "MongoDB Explained in 10 Minutes | SQL vs NoSQL | Jumpstart 2021",
//                 "timestamp": "Premiered Jul 27, 2021",
//                 "imageLink": "https://i.ytimg.com/an_webp/RGfFpQF0NpE/mqdefault_6s.webp?du=3000&sqp=CL2HlY8G&rs=AOn4CLAhzizZxKNVNhU2855uSc2Zv1hJ4g",
//                 "videoLink": " https://www.youtube.com/embed/RGfFpQF0NpE",
//                 "views": 22139,
//                 "like": 511,
//                 "description": "SQL, NoSQL, Relational, Non-Relational, Table, Collection, Row, Document, Column, Field. What does it all mean??",
//                 "tag": "mongodb",
//                 "_id": "61e58d77edfc8fda3aa05bff"
//             },
//             {
//                 "id": "2",
//                 "title": "Intro to MongoDB Atlas in 10 mins | Jumpstart 2021",
//                 "timestamp": "Premiered Jul 29, 2021",
//                 "imageLink": "https://i.ytimg.com/an_webp/xrc7dIO_tXk/mqdefault_6s.webp?du=3000&sqp=CNCxlY8G&rs=AOn4CLDUjKrmVGf_4QOzYMBrNttppLjPTA",
//                 "videoLink": "https://www.youtube.com/embed/xrc7dIO_tXk",
//                 "views": 22139,
//                 "like": 511,
//                 "description": "In this video, we’ll take a deeper look at MongoDB Atlas, our Database-as-a-Service. I’ll show you how to sign up, create your first cluster, load some sample data, and view your data from a really cool VS Code extension. All for FREE!",
//                 "tag": "mongodb",
//                 "_id": "61e58e3cfa8a515c6fd39d7e"
//             },
//             {
//                 "id": "3",
//                 "title": "Compass - The GUI For MongoDB in 10 mins | Jumpstart 2021",
//                 "timestamp": "Premiered Aug 4, 2021",
//                 "imageLink": "https://i.ytimg.com/an_webp/YBOiX8DwinE/mqdefault_6s.webp?du=3000&sqp=CMa5lY8G&rs=AOn4CLCdGjcgL6uvBc8G9gUim74GrWrgnA",
//                 "videoLink": "https://www.youtube.com/embed/YBOiX8DwinE",
//                 "views": 6172,
//                 "like": 511,
//                 "description": "Do you want to quickly explore your MongoDB data? Run ad hoc queries in seconds? Interact with your data with full CRUD functionality? You need Compass, the GUI for MongoDB.",
//                 "tag": "mongodb",
//                 "_id": "61e58e5efa8a515c6fd39d82"
//             },
//             {
//                 "id": "4",
//                 "title": "Serverless Functions Explained | MongoDB Realm Backend-as-a-Service | Jumpstart 2021",
//                 "timestamp": "Premiered Aug 11, 2021",
//                 "imageLink": "https://i.ytimg.com/vi/Evp3xTzWCu4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAX5cN8AwPhHY3nDcVrExsnwERBSw",
//                 "videoLink": "https://www.youtube.com/embed/Evp3xTzWCu4",
//                 "views": 7200,
//                 "like": 511,
//                 "description": "Do you want to quickly and easily build out a backend for your application, including API routes, user authentication, GraphQL, and much more? And do that without hosting your own server? ",
//                 "tag": "mongodb",
//                 "_id": "61e58e73fa8a515c6fd39d84"
//             },
//             {
//                 "id": "5",
//                 "title": "Easy Frontend MongoDB Integration | MongoDB, Next.js, & Tailwind CSS | Jumpstart 2021",
//                 "timestamp": "Premiered Aug 23, 2021",
//                 "imageLink": "https://i.ytimg.com/vi/xIrtGeggw0E/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCt7JGjhX1zchWxfxxHQhrdCDerFQ",
//                 "videoLink": "https://www.youtube.com/embed/xIrtGeggw0E",
//                 "views": 139,
//                 "like": 511,
//                 "description": "Welcome back to the MongoDB Jumpstart series. In this video, we are going to build out the frontend of our e-commerce application in Next.js including all of the components, product pages, and style everything using Tailwind CSS. ",
//                 "tag": "mongodb",
//                 "_id": "61e58e8dfa8a515c6fd39d86"
//             },
//             {
//                 "id": "6",
//                 "title": "MongoDB Atlas Search to Easily Find Your Data | Search & Autocomplete Implementation | Jumpstart",
//                 "timestamp": "Premiered Sep 8, 2021",
//                 "imageLink": "https://i.ytimg.com/an_webp/jnxnhbTO2RA/mqdefault_6s.webp?du=3000&sqp=COCblY8G&rs=AOn4CLCgn4HwKojhj7MyZwj-j5KkQx2SzQ",
//                 "videoLink": "https://www.youtube.com/embed/jnxnhbTO2RA",
//                 "views": 3151,
//                 "like": 511,
//                 "description": "Welcome back to the MongoDB Jumpstart series. Have you ever wondered how searches work on websites? What about autocomplete? In this video, we are going to implement search and autocomplete in our e-commerce app utilizing MongoDB Atlas Search. ",
//                 "tag": "mongodb",
//                 "_id": "61e58e9ffa8a515c6fd39d88"
//             },
//             {
//                 "id": "7",
//                 "title": "MongoDB Atlas Search to Easily Find Your Data | Search & Autocomplete Implementation | Jumpstart",
//                 "timestamp": "Premiered Sep 8, 2021",
//                 "imageLink": "https://i.ytimg.com/an_webp/jnxnhbTO2RA/mqdefault_6s.webp?du=3000&sqp=COCblY8G&rs=AOn4CLCgn4HwKojhj7MyZwj-j5KkQx2SzQ",
//                 "videoLink": "https://www.youtube.com/embed/jnxnhbTO2RA",
//                 "views": 139,
//                 "like": 511,
//                 "description": "Welcome back to the MongoDB Jumpstart series. Have you ever wondered how searches work on websites? What about autocomplete? In this video, we are going to implement search and autocomplete in our e-commerce app utilizing MongoDB Atlas Search. ",
//                 "tag": "mongodb",
//                 "_id": "61e58eaffa8a515c6fd39d8a"
//             },
//             {
//                 "id": "7",
//                 "title": "MongoDB Atlas Search to Easily Find Your Data | Search & Autocomplete Implementation | Jumpstart",
//                 "timestamp": "Premiered Sep 8, 2021",
//                 "imageLink": "https://i.ytimg.com/an_webp/jnxnhbTO2RA/mqdefault_6s.webp?du=3000&sqp=COCblY8G&rs=AOn4CLCgn4HwKojhj7MyZwj-j5KkQx2SzQ",
//                 "videoLink": "https://www.youtube.com/embed/jnxnhbTO2RA",
//                 "views": 139,
//                 "like": 511,
//                 "description": "Welcome back to the MongoDB Jumpstart series. Have you ever wondered how searches work on websites? What about autocomplete? In this video, we are going to implement search and autocomplete in our e-commerce app utilizing MongoDB Atlas Search. ",
//                 "tag": "mongodb",
//                 "_id": "61e5916eb3254a5d99a254ca"
//             }
//         ]
//     }
// ]

const SearchVideo = ({searchItem,setSearchItem,userEmail}) => {
    const { searchitem } = useParams();
    const [channel,setChannel]=useState([]);
    const [video,setVideo]=useState([]);
    const [subscriber,setSubscriber]=useState("");
    const [findVideo,setFindVideo]=useState([]);
    let find=[];
    let related=[];
    // getchannel();
    // console.log(searchitem)
    // useEffect(()=> {
    //     getallchannel()
    //     },[searchitem])

const getchannel=async()=>{
    console.log(searchitem)
    const fetchdata=await fetch(`https://youtubeclonee.herokuapp.com/channel/search1/${searchitem}`,
    {method:"GET",})
    .then((data)=>{data.json()
       
    })
    .then((res)=>{
console.log(res)
        setChannel(res)
        setVideo(res.video)
    });
    console.log(fetchdata)       
  }

  const [recommandedVideos,setRecommondedVideos]=useState([]);
    useEffect(()=> getallchannel(),[searchitem])

    const getallchannel=()=>{
         fetch("https://youtubeclonee.herokuapp.com/channel/getvideos",
        {method:"GET",})
        .then((data)=>data.json())
        .then((res)=>{
            console.log(res)
            
            let temp=searchItem.toLowerCase();
            console.log(temp)
            for(let i=0;i<res.length;i++)
            {
                let temp2=res[i].video.tag.toLowerCase()
                console.log(temp2)
                if(temp.includes(temp2) )
                {
                   
                    find.push(res[i])
                }
                else{
                    related.push(res[i])
                }
            }
            setFindVideo(find)
            

           setRecommondedVideos(related)
            
        });
               
      }
    
  
// console.log(channel);
// console.log(channel.length);
    return (
         <div className="search_channel">
        <div className="searchvideo">
        <div className="searchvideo_filter">
        <TuneOutlinedIcon/>
        <h2>FILTER</h2>

        </div>
        <hr/>
        {(video.length>0)? <div className="channel_detail">
        <ChannelRow
        image={channel.logo}
        channelName={channel.channelName}
        subscriber={channel.subscriber}
        setSubscriber={setSubscriber}
        userEmail={userEmail}
        noOfVideos="250"
        logo={channel.logo}
        verified
        description={channel.ChannelMoto}
        />
        <hr/>
        </div>:""}

        <div>
        {video.map((d,index)=>{
           
               return  <VideoRow
                 key={index}
                 id={d._id}
                 title={d.title}
                 channel={channel.channelName}
                 image1={d.imageLink}
                 videoLink={d.videoLink}
                 image2={channel.logo}
                 timestamp={d.timestamp}
                 views={d.views}
                 description={d.description}
                 />
        }) }
        
        </div>



        </div>

        <div className="searchvideo">
        {findVideo.map((v,index)=>{
            
            return <VideoRow
            key={index}
            id={v.video._id}

            title={v.video.title}
            channel={v.channelName}
            image1={v.video.imageLink}
            image2={v.logo}
            videoLink={v.video.videoLink}
            timestamp={v.video.timestamp}
            views={v.video.views}
            description={v.video.description}
            
            />
        }) }
        </div>
        <div className="searchvideo">
        {recommandedVideos.map((v,index)=>{
            
            return <VideoRow
            key={index}
            id={v.video._id}

            title={v.video.title}
            channel={v.channelName}
            image1={v.video.imageLink}
            image2={v.logo}
            videoLink={v.video.videoLink}
            timestamp={v.video.timestamp}
            views={v.video.views}
            description={v.video.description}
            
            />
        }) }
        </div>
        </div>
    )
}

export default SearchVideo


// {channel.map((c,index)=>(
//     <>
//  <ChannelRow
//  image={c.logo}
//  channelName={c.channelName}
//  subscribers={c.subscriber}
//  noOfVideos="250"
//  verified
//  description={c.ChannelMoto}
//  />
//  {c.video.map((d,index)=>(
//      <VideoRow
//      key={index}
//      title={d.title}
//      channel={c.channelName}
//      image1={d.imageLink}
//      image2={c.logo}
//      timestamp={d.timestamp}
//      views={d.views}
//      description={d.description}
     
//      />
//  )) }
//  </>

// ))}



// {channel.video.map((d,index)=>(
//     <VideoRow
//     key={index}
//     title={d.title}
//     channel={channel.channelName}
//     image1={d.imageLink}
//     image2={channel.logo}
//     timestamp={d.timestamp}
//     views={d.views}
//     description={d.description}
    
//     />
// )) }