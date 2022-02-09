import React,{useState,useEffect} from 'react';
import "../ChannelPage.css";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import { useParams } from "react-router-dom";
import VideoRow from './VideoRow';
import VideoCard from './VideoCard';
import Avatar from '@mui/material/Avatar';

  

export const ChannelPage = () => {
    const { channelname } = useParams();
    const [channel,setChannel]=useState([]);
    const [video,setVideo]=useState([]);
    useEffect(()=> getchannel(),[channelname])

const getchannel=()=>{
     fetch(`https://youtubeclonee.herokuapp.com/channel/search1/${channelname}`,
    {method:"GET",})
    .then((data)=>data.json())
    .then((res)=>{
        
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

                <img  className="channelPage_coverImage" alt="channelname"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFdyAG3BHNMuZ417L21mydWdcJ3GOgsteNaQ&usqp=CAU"/>
            
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
                        <Tab label="playlist" value="3" />
                        <Tab label="about" value="4" />
                        </TabList>

                    </Box>
                    <TabPanel value="1">
                    <div className="channelPage_video">
                    {video.map((d,index)=>{
                        
                        return <VideoCard
                        key={index}
                        title={d.title}
                        channel={channel.channelName}
                        image1={d.imageLink}
                        image2={channel.logo}
                        timestamp={d.timestamp}
                        views={d.views}
                        id={d._id}
                        videoLink={d.videoLink}
                        
                        />
                    }) }
                    </div>
                    </TabPanel>
                    <TabPanel value="2">
                    <div>
                    {video.map((d,index)=>(
                             <VideoRow
                             key={index}
                             title={d.title}
                             channel={channel.channelName}
                             image1={d.imageLink}
                             image2={channel.logo}
                             timestamp={d.timestamp}
                             views={d.views}
                             videoLink={d.videoLink}
                             description={d.description}
                             
                             />
                         )) }
                    </div>
                    </TabPanel>
                    <TabPanel value="3">
                    <div className="channelPage_video">
                    {video.map((d,index)=>{
                        
                        return <VideoCard
                        key={index}
                        title={d.title}
                        channel={channel.channelName}
                        image1={d.imageLink}
                        image2={channel.logo}
                        timestamp={d.timestamp}
                        videoLink={d.videoLink}
                        views={d.views}
                        id={d._id}
                        
                        />
                    }) }
                    </div>
                    </TabPanel>

                    <TabPanel value="4"><h2>No data available</h2> </TabPanel>
                    </TabContext>
                </div>
            </div>
        </div>
    )
}


