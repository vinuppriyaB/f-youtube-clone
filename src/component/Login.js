import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useHistory } from "react-router";
import { useState } from "react";
import Paper from '@mui/material/Paper';
import "../Login.css";
import axios from "axios";



export const Login=({setCurrentUser,currentUser,userName,
    setUserName,
    userEmail,
    setUserEmail,
    profilePic,
    setProfilePic})=>{
    

    
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    
    const history = useHistory();
    const resetLoginForm = (event) => {
                setEmail("");
            setPassword("");
          
            
        };
    const loginprocess = async() => {  
        const loginuser={email:email,password:password }; 

        try{
            var response=await axios.post("https://youtubeclonee.herokuapp.com/register/signin",{
            email:email,
            password:password
        })
       
        // console.log(response.data);
            
        if(response.data)
        {
            await localStorage.setItem("token",response.data.token);
            localStorage.setItem("firstName",response.data.firstName);
            localStorage.setItem("email",response.data.email);
            localStorage.setItem("profilePic",response.data.profilePic);
            setUserName(response.data.firstName);
            setUserEmail(response.data.email);
            setProfilePic(response.data.profilePic);


            history.push("/");
            // console.log(userName)
           
            
        }
        }catch(e){
            console.warn(e)
        }
        
    //     fetch("http://localhost:8000/register/signin",
    // {
    //     method:"POST",
    //     body: JSON.stringify(loginuser),
    //     headers:{"Content-Type":"application/json"},
    // }).then((data)=>data.json())
    // .then((res)=>{
    //     setCurrentUser(email)
    //     console.log(res);
    //     if(res.status==200)
    //       {
        
    //         history.push("/");

    //       }
    //       else
    //       {
            
    //         window.alert("Invalid user account");

    //       }
         
        
    //     resetLoginForm();
    // }).catch((e)=> console.log("ERROR"))  
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
        <p className="login_singin_text">Sign in</p>
        <p>to continue with YouTube</p>
        </div>
        <input
        type="text" 
        className="login_textfield"
        label='Email' 
        placeholder='Enter email'
        value={email}
        onChange={event => setEmail(event.target.value)}
        variant="outlined" />


        <input
        type="text" 
        className="login_textfield"
        placeholder='Enter password' 
        type='password'
        value={password}
        onChange={event => setPassword(event.target.value)}
        variant="outlined" />
        <p>Forget password?</p>
           <div className="Login_bottom">
           <Button variant="text" className="login_btn "
           onClick={()=>history.push("/register")}
           >Create account</Button>


           <Button variant="contained" className="login_btn"
           onClick={()=>loginprocess()}
           >Log In</Button>
           </div> 
        


        

        </div >
  

        
            

      
    )
}

export default Login







