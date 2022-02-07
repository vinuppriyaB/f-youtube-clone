import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useHistory } from "react-router";
import { useState } from "react";
import Paper from '@mui/material/Paper';
import "../Login.css";
import axios from "axios";



export const Registration=({setCurrentUser,currentUser,userName,
    setUserName,
    userEmail,
    setUserEmail,
    profilePic,
    setProfilePic})=>{
    

        // console.log(userName,userEmail,profilePic)  
    const[firstName,setFirstName]=useState("");
    const[lastName,setLastName]=useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [ProPic,setProPic]=useState("");
    
    
    const history = useHistory();
    const resetLoginForm = (event) => {
                setEmail("");
            setPassword("");
            setProfilePic("");
          
            
        };
    const registrationprocess = async() => {  
        const registerUser={firstName:firstName,lastName:lastName,email:email,password:password,profilePic:ProPic }; 
        
        
      await fetch("http://localhost:8000/register/signup",
    {
        method:"POST",
        body: JSON.stringify(registerUser),
        headers:{"Content-Type":"application/json"},
    }).then((res)=>{
        setCurrentUser(email)
        if(res.status==200)
          {
            
                try{
                    var response= axios.post("http://localhost:8000/channel",{
                        channelName:`${firstName} ${lastName}`,
                        email:email,
                        logo:ProPic,
                        
                })
            
                // console.log(response.data);
                  
                
                }catch(e){
                    console.warn(e)
                }
           
        
            setTimeout(() => {
                setUserName(firstName);
            setUserEmail(email);
            setProfilePic(ProPic);
            resetLoginForm();
            history.push("/"); 


            }, 2000);

            
            

            
          }
          else
          {
            window.alert("Invalid user account");
            

          }
         
        

    }).catch((e)=> console.log("ERROR"))  
}

    return(

        <div  className="Login_field">
        <div className="Login_top">

        <div className="google"> 
        <p>
        <span style={{color:"rgb(19, 124, 245)"}}>G</span>
        <span style={{color:"red"}}>o</span>
        <span style={{color:"rgb(250, 214, 8)"}}>o</span>
        <span style={{color:"rgb(19, 124, 245)"}}>g</span>
        <span style={{color:"green"}}>l</span>
        <span style={{color:"red"}}>e</span></p>

        </div>
        <p className="login_singin_text">Create your Account</p>
        <p>to continue with YouTube</p>
        </div>
        <input
        type="text" 
        className="login_textfield"
        label='firstName' 
        placeholder='First Name'
        value={firstName}
        onChange={event => setFirstName(event.target.value)}
        variant="outlined" />
        <input
        type="text" 
        className="login_textfield"
        label='lastName' 
        placeholder='Last Name'
        value={lastName}
        onChange={event => setLastName(event.target.value)}
        variant="outlined" />
        <input
        type="text" 
        className="login_textfield"
        label='Email' 
        placeholder='Email'
        value={email}
        onChange={event => setEmail(event.target.value)}
        variant="outlined" />


        <input
        type="text" 
        className="login_textfield"
        placeholder='Password' 
        type='password'
        value={password}
        onChange={event => setPassword(event.target.value)}
        variant="outlined" />

        <input
        type="text" 
        className="login_textfield"
        placeholder='Profile PictureLink' 
        type='profile'
        value={ProPic}
        onChange={event => setProPic(event.target.value)}
        variant="outlined" />

           <div className="Login_bottom">
           <Button variant="text" className="login_btn "
           onClick={()=>history.push("/signin")}
           >Have account</Button>


           <Button variant="contained" className="login_btn"
           onClick={()=>registrationprocess()}
           >Register</Button>
           </div> 
        </div>
      
    )
}

