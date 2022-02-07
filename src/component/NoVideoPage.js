import React from 'react';
import Avatar from '@mui/material/Avatar';
import "../NoVideoPage.css";

const NoVideoPage = () => {
    return (
        <div className="Novideo">
        <div className="Novideo_Avatar">
        <Avatar
            alt="Remy Sharp"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAu_33DRH28yMT8XSdPFJhOy7Oojt3zbKC-g&usqp=CAU"
            sx={{ width: 200, height: 200 }}
            />

        </div>
        <div className="Novideo_text">

        <p className="text_head">Upload a video to get started</p>
        <p className="text_para">Start sharing your story and connecting with viewers. Videos you </p><p>upload will show up here.</p>
        </div>
            
        </div>
    )
}

export default NoVideoPage
