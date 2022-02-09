import React,{useState,useEffect} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from "axios";
import "../PostVideo.css";
import { useHistory } from "react-router";


export const PostVideo = ({userName,userEmail,profilePic,channelName}) => {
    const [title,setTitle]=useState("");
    
    const [videoLink,setVideoLink]=useState("");
    const [description,setDescription]=useState("");
    const [tags,setTags]=useState("");
    const history = useHistory();

    // const resetLoginForm = (event) => {
    //             setEmail("");
    //         setPassword("");
          
            
    //     };
    const postvideo = async() => {  
        

        try{
            var response=await axios.post("https://youtubeclonee.herokuapp.com/channel/postvideo",{
                channelName:channelName,
                email:userEmail,
                logo:profilePic,
                title:title,
                imageLink:"link",
                videoLink:videoLink,
                description:description,
                tags:tags,
        })
       
        // console.log(response.data);
            
        
        }catch(e){
            console.warn(e)
        }
    }
    return (
        <div className="postvideo">


            <TextField
            type="text" 
            className="login_textfield"
            label='Title' 
            placeholder='Title'
            value={title}
            onChange={event => setTitle(event.target.value)}
            variant="outlined" />
            
            

            <TextField
            type="text" 
            className="login_textfield"
            label='videoLink'
            placeholder='videoLink'
            value={videoLink}
            onChange={event => setVideoLink(event.target.value)}
            variant="outlined" />

            <TextField
            type="text" 
            className="login_textfield"
            label='Description'
            placeholder='Description'
            value={description}
            onChange={event => setDescription(event.target.value)}
            variant="outlined" />

            <TextField
            type="text" 
            className="login_textfield"
            label='Tags'
            placeholder='Tags'
            value={tags}
            onChange={event => setTags(event.target.value)}
            variant="outlined" />

            
            
           <Button variant="contained" className="login_btn"
           onClick={()=>postvideo()}
           >Upload Video</Button>
        </div>
    )

}
