import React,{useState,useEffect} from 'react';
import Avatar from '@mui/material/Avatar';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import Button from '@mui/material/Button';
import "../DisplyReplies.css";

const DisplayReplies = ({email,
    profilePic,
    text,
    like,
    dislike,}) => {
        const[likeClicked,setLikeClicked]=useState(false);
        const[unLikeClicked,setUnLikeClicked]=useState(false);

    


    return (
        <div className="reply_read">
        <div className="replyread_col1">
            <Avatar className="reply_avatar" alt={email} src={profilePic} />
        </div>
        <div className="replyread_col2">
            <div className="replyread_col2row1">
                <h4>{email}</h4>
            </div>
            <div className="replyread_col2row2">
                <p>{text}</p>
            </div>
            <div className="replyread_col2row3">
                <Button variant="text">
                {likeClicked? <ThumbUpIcon className="watchVideo_icon" 
                onClick={()=>setLikeClicked(!likeClicked)}
                />:
                <ThumbUpOutlinedIcon className="watchVideo_icon"
                onClick={()=>setLikeClicked(!likeClicked)}
                /> } 
                </Button>

                {unLikeClicked? <ThumbDownIcon className="watchVideo_icon" 
                onClick={()=>setUnLikeClicked(unLikeClicked)}
                />:
                <ThumbDownOutlinedIcon className="watchVideo_icon"
                onClick={()=>setUnLikeClicked(!unLikeClicked)}
                /> } 

            </div>


        </div>
        </div>
    )
}

export default DisplayReplies


