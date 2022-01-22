import React,{useState,useEffect} from 'react';
import "../Sidebar.css";
import {SidebarRow} from './SidebarRow';
import HomeIcon from '@mui/icons-material/Home';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import ExploreIcon from '@mui/icons-material/Explore';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import RestoreIcon from '@mui/icons-material/Restore';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { useParams } from "react-router-dom";
import { useHistory } from 'react-router';

const sidebardata=[
    {
        "title":"Home",
        "icon":<HomeIcon/>,
        "selected":true,
        "space":true,
    },
    {
        "title":"Explore",
        "icon":<ExploreIcon/>,
        "selected":false,
        "space":true,
    },

    {
        "title":"Subscription",
        "icon":<SubscriptionsIcon/>,
        "selected":false,
        "space":true,
    },
    
    {
        "title":"Library",
        "icon":<VideoLibraryIcon/>,
        "selected":false,
        "space":true,
    },
    {
        "title":"History",
        "icon":<RestoreIcon/>,
        "selected":false,
    },
    {
        "title":"Your videos",
        "icon":<OndemandVideoIcon/>,
        "selected":false,
    },
    {
        "title":"Watch Later",
        "icon":<WatchLaterOutlinedIcon/>,
        "selected":false,
    },
    {
        "title":"Liked videos",
        "icon":<ThumbUpOutlinedIcon/>,
        "selected":false,
    },
    {
        "title":"Show more",
        "icon":<KeyboardArrowDownOutlinedIcon/>,
        "selected":false,
    },
]

export const Sidebar = () => {
    const { searchitem } = useParams();
    let selectedValue=new Array(sidebardata.length);
    sidebardata.forEach((item,index)=> selectedValue[index]=item.selected);
    const [select,setSelect]=useState(selectedValue);
    
    return (

        <div className="sidebar" >
           {sidebardata.map((d,index)=>{
               
             return  <SidebarRow
                        key={index}
                        title={d.title}
                        icon={d.icon}
                        index={index}
                        select={select}
                        setSelect={setSelect}
                        space={d.space}
                       
                        
                    />
                })}
                </div>
                
                
        
       
    )
}
export const SSSidebar = () => {
    const [select,setSelect]=useState([]);
    const history = useHistory();
    const{feed}=useParams();

    const initialselect=()=>{
        
        if(feed=="explore")
        setSelect([false,true,false])
        else if(feed=="subscribe")
        setSelect([false,false,true])
        else
        setSelect([true,false,false])

    }
    useEffect(()=>{initialselect()},[useParams()])
        
   
    
    const sidebarSelection=()=>{

    }
    return (
        <div className="SSsidebar" >
            <div className={` ssidebarRow ${select[0] && "selected"}`} 
            onClick={()=>{history.push("/home/home")
            }}
            >
            <HomeIcon/>
            <p>Home</p>
            </div>
            <div className={`ssidebarRow ${select[1] && "selected"}`} 
            onClick={()=>{
                history.push("/explore/explore");
                
            }}>
            <ExploreIcon/>
            <p>Explore</p>
            </div>
            <div className={`ssidebarRow ${select[2] && "selected"}`} 
             onClick={()=>{
                history.push("/subscribe/subscribe");
                
            }}>
            <SubscriptionsIcon/>
            <p>Subscription</p>
            </div>
            <div className="library">
            <VideoLibraryIcon/>
            <p>Library</p>
            </div>

        </div>
    )
}


