import React,{useState,useEffect} from 'react';
import "../Comment.css";
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { useParams } from 'react-router';
import { useHistory } from 'react-router';
import DisplayComment from './DisplayComment';


const Comment = ({channelName,title,currentUser,setUserName,userName,userEmail,profilePic}) => {
    // console.log(channelName,title,currentUser,userName,userEmail,profilePic);
    const history = useHistory();
    const {watchitem} =useParams();
    const [text,setText]=useState("");
    const [showCommentBtn,setShowCommentBtn]=useState(false);
    // const[likeClicked,setLikeClicked]=useState(false);
    //     const[unLikeClicked,setUnLikeClicked]=useState(false);
    //     const [showReplyRow,setShowReplyRow]=useState(false);
        const [allComment,setAllComment]=useState([]);
        

        useEffect(()=> getchannel(),[watchitem])
let video=[];
    const getchannel=()=>{
         fetch(`https://youtubeclonee.herokuapp.com/channel/getcomment/${watchitem}`,
        {method:"GET",})
        .then((data)=>data.json())
        .then((res)=>{
           
            setAllComment(res[0].video.comment);
            
            
        });
               
      }

const postcomment=()=>{
    const comment={       
        channelName:channelName,
        videotitle:title,
        comment:{
        email:userName,
        profilePic:profilePic,
        text:text,
        like:0,
        dislike:0
        
        }
    }

        fetch("https://youtubeclonee.herokuapp.com/channel/postcomment",
        {
            method:"POST",
            body: JSON.stringify(comment),
            headers:{"Content-Type":"application/json"},
        }).then((res)=>{
            // console.log(res);
            getchannel();
            setText("");
        }).catch((e)=> console.log("ERROR"))  
        
}

// console.log(allComment)
    return (
        <div className="Comment_area">
        <div className="total_comment">
        <h3>{allComment.length} Comments</h3>
        </div>
            <div className="comment_write">
                <div className="comment_col1">
                    <Avatar alt={userName} src={profilePic} />
                </div>
                <div className="comment_col2">
                    <TextField id="standard-basic" 
                    fullWidth
                    variant="standard" 
                    value={text}
                    placeholder="Add a public comment..."
                    onClick={()=>setShowCommentBtn(true)}
                    onChange={(event)=>setText(event.target.value)}
                    />
                {showCommentBtn? <div className="comment_button">
                        <Button variant="text" 
                        className="cancel_btn"
                        onClick={()=>setShowCommentBtn(false)}>cancel</Button>
                        <Button variant="text"
                        className="comment_btn"
                        onClick={()=>{postcomment()}}
                        >comment</Button>
                    </div>:""}

                </div>

            </div> 
            {allComment.map((data,index)=>{
                
               return <DisplayComment
                key={index}
                text={data.text}
                like={data.like}
                dislike={data.dislike}
                email={data.email}
                channelName={channelName}
                currentUser={currentUser}
                title={title}
                cProfilePic={data.profilePic}
                commentId={data._id}
                userName={userName}
                userEmail={userEmail}
                profilePic={profilePic}

                />
            })}
                
                
        </div>
    )
}

export default Comment
