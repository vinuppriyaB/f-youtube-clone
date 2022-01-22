import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useHistory } from "react-router";
import { useState } from "react";
import Paper from '@mui/material/Paper';
import "../Login.css";



export const Login=({setCurrentUser,currentUser})=>{
    

    
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    
    const history = useHistory();
    const resetLoginForm = (event) => {
                setEmail("");
            setPassword("");
          
            
        };
    const loginprocess = () => {  
        const loginuser={email:email,password:password }; 
        
        
        fetch("http://localhost:8000/register/signin",
    {
        method:"POST",
        body: JSON.stringify(loginuser),
        headers:{"Content-Type":"application/json"},
    }).then((res)=>{
        setCurrentUser(email)
        if(res.status==200)
          {
            history.push("/");

          }
          else
          {
            
            window.alert("Invalid user account");

          }
         
        
        resetLoginForm();
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


// const paperStyle={padding :50,height:'50vh',width:380, margin:"100px auto"}
//     const avatarStyle={backgroundColor:"#51459E"}
//     const btnstyle={margin:'20px 0',backgroundColor:"green"}
//     const textstyle={margin:'20px 0'}
//     <TextField id="outlined-basic" label="Outlined" variant="outlined" />
//     <TextField id="outlined-basic"
//     variant="outlined" 
//     label='Email' 
//     placeholder='Enter email'  
    
//     value={email}
//     onChange={event => setEmail(event.target.value)}
//     />


//     <TextField 
//     label='Password' 
//     placeholder='Enter password'  
    
//     type='password' 
    
//     value={password}
//     onChange={event => setPassword(event.target.value)}
//     />
    
//     <Button type='submit' 
//     className="btn-color"
//     color='primary' 
//     variant="contained" 

//     // fullWidth
//     onClick={() => {loginprocess()
//     }}
//     >Sign in</Button>
//     <Typography >
//          <Link href="#" >
//             Forgot password ?
//     </Link>
//     </Typography>
    
//     <Typography > Don't you have an account ?
//     <Button variant="text" 
    
    
//     onClick={()=>history.push("/")} 
//     > sign up
//     </Button>
//     </Typography>

// </div>







