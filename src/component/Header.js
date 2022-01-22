import React from 'react';
import "../Header.css";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router';

const Header = ({searchItem,setSearchItem,currentUser,setCurrentUser}) => {
const history=useHistory();
console.log(currentUser)
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
                />
                <Link to={`/search/${searchItem}`}>
                <SearchIcon className="header__searchButton"/>
                </Link>

                
            </div>
            <div className="header__right">
                <VideoCallIcon className="header__icon"/>
                <AppsIcon className="header__icon"/>
                <NotificationsIcon className="header__icon" />
                {currentUser? <Avatar alt={currentUser} className="header__icon"
                src="/static/images/avatar/2.jpg" /> : 
                <Button variant="outlined"
                onClick={()=>history.push("/signin")}
                >sign in</Button> }
            </div>
        </div>
    )
}

export default Header
  