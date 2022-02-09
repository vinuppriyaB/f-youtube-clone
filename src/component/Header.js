import React,{useState,useEffect} from 'react';
import "../Header.css";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import PostAddOutlinedIcon from '@mui/icons-material/PostAddOutlined';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router';

const Header = ({searchItem,setSearchItem,currentUser,setCurrentUser,setUserName,userName,
    userEmail,
    setUserEmail,
    profilePic,
    setProfilePic}) => {
const history=useHistory();

const updatecurrentUser=()=>{
    const email=localStorage.getItem("email");
  const firstName=localStorage.getItem("firstName");
  const pic=localStorage.getItem("profilePic");
  // console.log(email,firstName,pic);
  setUserName(firstName);
  setUserEmail(email);
  setProfilePic(pic);

}
updatecurrentUser();   


const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  
  const logoutfunction=()=>{
    localStorage.removeItem("email");
    localStorage.removeItem("firstName");
    localStorage.removeItem("profilePic");
    setUserName("");
  setUserEmail("");
  setProfilePic("");
  history.push("/")
  }
  const handleKeyPress = (event) => {
   
    if(event.key === 'Enter'){
      history.push(`/search/${searchItem}`)
    }
  }
// console.log(userName,userEmail,profilePic) ; 
    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon/>
                <Link to="/">
                <img 
                className="header__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" alt=""/>
                
                </Link>
               
            </div>
            
            <div className="header__input">
                <input placeholder="Search..." 
                type="search"
                
                value={searchItem}
                onChange={(e)=>setSearchItem(e.target.value)}
                onKeyPress={(event)=>handleKeyPress(event)}
                />

                <SearchIcon className="header__searchButton" onClick={()=>{

                  history.push(`/search/${searchItem}`)}} />
                

                
            </div>
            <div className="header__right">
                <VideoCallIcon className="header__icon"/>
                <AppsIcon className="header__icon"/>
                <NotificationsIcon className="header__icon" />
                {userEmail? <div>
                    <Avatar alt={userName} className="header__icon"
                        onClick={handleClick}
                        src={profilePic} /> 
                        <Popover
                            id={id}
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                           
                            }}
                        >
                        <List
                        sx={{ width:"300px", bgcolor: 'background.paper' }}
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                        
                      >
                        <ListItemButton>
                        <ListItemIcon>
                        <Avatar alt={userName} className="header__icon"
                        src={profilePic} />
                        </ListItemIcon>
                        <h3>{userName}</h3>
                        </ListItemButton>

                        <ListItemButton onClick={()=>history.push(`/yourchannel/${userEmail}`)}>
                        <ListItemIcon>
                        <AccountBoxOutlinedIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Your Channel" />
                      </ListItemButton>

                      

                    <ListItemButton onClick={()=>logoutfunction()} >
                    <ListItemIcon>
                    <LogoutOutlinedIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Log Out" />
                  </ListItemButton>

                      </List>
                        </Popover>
                </div>
                : 
                <Button variant="outlined"
                onClick={()=>history.push("/signin")}
                >sign in</Button> }
            </div>
        </div>
    )
}

export default Header
  