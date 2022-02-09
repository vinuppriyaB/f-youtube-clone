import React,{useState,useEffect} from 'react';
import "../ChannelPage.css";

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Tabs from '@mui/material/Tabs';
import { useParams } from "react-router-dom";
import VideoRow from './VideoRow';
import ChannelRow from "./ChannelRow";
import VideoCard from './VideoCard';
import Avatar from '@mui/material/Avatar';
import NoVideoPage from "./NoVideoPage";
import {PostVideo} from "./PostVideo";

  

export const YourChannel = () => {
    const { email } = useParams();
    const [channel,setChannel]=useState([]);
    const [video,setVideo]=useState([]);
    useEffect(()=> getchannel(),[email])

const getchannel=()=>{
    // console.log("call")
     fetch(`https://youtubeclonee.herokuapp.com/channel/search/${email}`,
    {method:"GET",})
    .then((data)=>data.json())
    .then((res)=>{
        // console.log(res)
        setChannel(res)
        setVideo(res.video)
    });
           
  }
    const [value, setValue] =useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    return (
        <div className="channelPage">


            
            <div className="channelPage_displaydetails">
                <div className="channelPage_channeldetails">
                
                <Avatar className="channelPage_logo"
                alt={channel.channelName} src={channel.logo} />
                <div className="channelPage_text">
                <h2>{channel.channelName}</h2>
                <p>{channel.subscriber} subscribers</p>

                </div>
                </div>


                <div classname="channelPage_tab">
                    <TabContext value={value} sx={{ width:"80%" }}>
                    <Box className="channelPage_TabList" sx={{ borderBottom: 0, borderColor: 'divider',backgroundColor:"rgb(247, 243, 243)"}}>
                    
                    <TabList onChange={handleChange} aria-label="lab API tabs example" >


                        <Tab label="Home" value="1" />
                        <Tab label="video" value="2" />
                        <Tab label="post video" value="3" />
                       
                        
                        </TabList>

                    </Box>
                    <TabPanel value="1">
                    <div className="channelPage_video">
                    {(video.length<=0) ? <NoVideoPage/>:""}
                    {video.map((d,index)=>{
                        
                        return <VideoCard
                        key={index}
                        title={d.title}
                        channel={channel.channelName}
                        image1={d.imageLink}
                        image2={channel.logo}
                        videoLink={d.videoLink}
                        timestamp={d.timestamp}
                        views={d.views}
                        id={d._id}
                        
                        />
                    }) }
                    </div>
                    </TabPanel>
                    <TabPanel value="2">
                    {(video.length<=0) ? <NoVideoPage/>:""}
                    <div>
                    {video.map((d,index)=>(
                             <VideoRow
                             id={d._id}
                             key={index}
                             title={d.title}
                             channel={channel.channelName}
                             image1={d.imageLink}
                             image2={channel.logo}
                             timestamp={d.timestamp}
                             videoLink={d.videoLink}
                             views={d.views}
                             description={d.description}
                             
                             />
                         )) }
                    </div>
                    </TabPanel>
                    <TabPanel value="3">
                    <PostVideo
                    channelName={channel.channelName}
                
                    />
                    </TabPanel>
                    
                    </TabContext>
                </div>
            </div>
        </div>
    )
}


                // <img  className="channelPage_coverImage" alt="channelname"  src={channel.coverImage}/>