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
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import DisplayReplies from './DisplayReplies';

const DisplayComment = ({
    text,
    like,
    dislike,
    email,
    channelName,
    currentUser,
    title,
    cProfilePic,
    commentId,
    userEmail,
    userName,
    profilePic
}) => {

        const history = useHistory();
        const {watchitem} =useParams();
        const [replyText,setReplyText]=useState("");
        const [showCommentBtn,setShowCommentBtn]=useState(false);
        const[likeClicked,setLikeClicked]=useState(false);
            const[unLikeClicked,setUnLikeClicked]=useState(false);
            const [showReplyRow,setShowReplyRow]=useState(false);
            const [allreply,setAllReply]=useState([]);
            const [showReplies,setShowReplies]=useState(false)
            const [Clike,setCLike]=useState(like);
            const [CDislike,setCDisLike]=useState(dislike)
            
    
            useEffect(()=> getReply(),[])
    let video=[];
        const getReply=()=>{
             fetch(`https://youtubeclonee.herokuapp.com/channel/getreply/${watchitem}/${commentId}`,
            {method:"GET",})
            .then((data)=>data.json())
            .then((res)=>{
                // console.log(res)
                setAllReply(res[0].video.comment.reply);
                
                
            });
                   
          }

        const postreply=()=>{
            const reply={       
                channelName:channelName,
                videotitle:title,
                commentText:text,
                replyText:replyText,
                email:userName,
                profilePic:profilePic,
                like:0,
                dislike:0

                
                }
            
            // console.log(reply)
        
                fetch("https://youtubeclonee.herokuapp.com/channel/postreply",
                {
                    method:"POST",
                    body: JSON.stringify(reply),
                    headers:{"Content-Type":"application/json"},
                }).then((res)=>{
                    console.log(res);
                    getReply();
                    setReplyText("");
                    setShowReplyRow(false)
                }).catch((e)=> console.log("ERROR"))  
                
        }

        const commentLikeUpdate=(id,channelName,clicked)=>{
            // console.log(id,channelName)
            const updateOn={
                 title:title,
                channelName:channelName,
                commentText:text,
                clicked:clicked,
            }
            fetch("https://youtubeclonee.herokuapp.com/channel/updateCommentLike",
                {
                    method:"PUT",
                    body: JSON.stringify(updateOn),
                    headers:{"Content-Type":"application/json"},
                }).then((res)=>{
                    if(res.status==200)
                    {
                        if(clicked)
                        setCLike(Clike+1);
                        else
                        setCLike(Clike-1);
                        setLikeClicked(!likeClicked)
                    }
                    
                }).catch((e)=> console.log("ERROR"))  
            
        }    
        const commentDisLikeUpdate=(id,channelName,clicked)=>{
            // console.log(id,channelName)
            const updateOn={
                 title:title,
                channelName:channelName,
                commentText:text,
                clicked:clicked,
            }
            fetch("https://youtubeclonee.herokuapp.com/channel/updateCommentLike",
                {
                    method:"PUT",
                    body: JSON.stringify(updateOn),
                    headers:{"Content-Type":"application/json"},
                }).then((res)=>{
                    if(res.status==200)
                    {
                        if(clicked)
                        setCDisLike(CDislike+1);
                        else
                        setCDisLike(CDislike-1);
                        setUnLikeClicked(!unLikeClicked)
                    }
                    
                }).catch((e)=> console.log("ERROR"))  
            
        }    

    return (
        <div className="comment_read">
        <div className="commentread_col1">
            <Avatar alt={email} src={cProfilePic} />
        </div>
        <div className="commentread_col2">
            <div className="commentread_col2row1">
                <h4>{email}</h4>
            </div>
            <div className="commentread_col2row2">
                <p>{text}</p>
            </div>
            <div className="commentread_col2row3">
                <Button variant="text">
                {likeClicked? <ThumbUpIcon className="watchVideo_icon" 
                onClick={()=>{
                    
                    commentLikeUpdate(title,channelName,!likeClicked)  
        
                }}/>:
                <ThumbUpOutlinedIcon className="watchVideo_icon"
                onClick={()=>{
                    if(unLikeClicked)
                    {
                        commentLikeUpdate(title,channelName,!likeClicked)
                        commentDisLikeUpdate(title,channelName,!unLikeClicked)
                    }
                    else{
                        commentLikeUpdate(title,channelName,!likeClicked)
                    }
                    
                }}
                /> } 
                {Clike}</Button>
                <Button variant="text">
                {unLikeClicked? <ThumbDownIcon className="watchVideo_icon" 
                onClick={()=>{
                    
                    commentDisLikeUpdate(title,channelName,!unLikeClicked)
        
                }}/>:
                <ThumbDownOutlinedIcon className="watchVideo_icon"
                    onClick={()=>{
                        if(likeClicked)
                        {
                            commentDisLikeUpdate(title,channelName,!unLikeClicked)
                            commentLikeUpdate(title,channelName,!likeClicked)
                        }else{
                            commentDisLikeUpdate(title,channelName,!unLikeClicked)
                        }
                    }}
                    
                /> } 
                {CDislike}</Button>
                <Button variant="text"
                onClick={()=>setShowReplyRow(true)}
                >reply</Button>
            </div>
            


            {showReplyRow ? <div className="commentread_col2row4">
                <div className="reply_write">
                    <div className="reply_col1">
                        <Avatar alt={userName} src={profilePic} />
                    </div>
                    <div className="reply_col2">
                        <TextField id="standard-basic" 
                        fullWidth
                        variant="standard" 
                        value={replyText}
                        placeholder="Add a public reply..."
                        onChange={(event)=>setReplyText(event.target.value)}
                        />
                        <div className="comment_button">
                            <Button variant="text"
                            onClick={()=>setShowReplyRow(false)}
                            >cancel</Button>
                            <Button variant="contained"
                            onClick={()=>{postreply()}}
                            >Reply</Button>
                        </div>

                    </div>
                    
                </div>  
            </div>:""}
            <div className="commentread_col2row5">
                {allreply.length>0? showReplies? <Button variant="text"
                onClick={()=>getReply(commentId)}> 
                <ArrowDropUpIcon onClick={()=>setShowReplies(false)} />
                Hide {allreply.length} replies
                </Button>:<Button variant="text"
                onClick={()=>getReply(commentId)}> 
                <ArrowDropDownIcon onClick={()=>setShowReplies(true)} />
                View {allreply.length} replies
                </Button> :""}
                {showReplies? allreply.map((d,index)=> 
                    <DisplayReplies 
                    email={d.email}
                    profilePic={d.profilePic}
                    text={d.text}
                    like={like}
                    dislike={dislike}
                    />) :"" }
            </div>
        </div>
    </div>
    )
}

export default DisplayComment
