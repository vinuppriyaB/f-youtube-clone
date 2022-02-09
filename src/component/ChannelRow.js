import React,{useState,useEffect} from 'react';
import "../ChannelRow.css";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  pt: 4,
  px: 4,
  pb: 3,
};
const ChannelRow = ({
        image,
        channelName,
        subscriber,
        noOfVideos,
        verified,
        description,
        userEmail,
        setSubscriber,
        logo
}) => {
  
  
  const [subscribed,setSubscribed]=useState(false);
  
  const [open, setOpen] = useState(false);
  
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  

  const checksubscription=() => {
      const updateOn={
          email:userEmail,
          channelName:channelName,
         
     }
      fetch("https://youtubeclonee.herokuapp.com/register/checkforsubscription",
      {
          method:"PUT",
          body: JSON.stringify(updateOn),
          headers:{"Content-Type":"application/json"},
      }).then((res)=>{
          // console.log(res)
          if(res.status==200)
          {
           
           setSubscribed(true)
          }
          if(res.status==401)
          {
           setSubscribed(false)
          }
        
      }).catch((e)=> console.log(e))
  }
  useEffect(()=> checksubscription(),[]);

  const addsubscribedCannel=(userEmail,channelName)=>{
        

    const updateOn={
        email:userEmail,
        channelName:channelName,
        logo:logo,
        
    }
    // console.log(updateOn);
    fetch("https://youtubeclonee.herokuapp.com/register/addchannel",
{
   method:"POST",
   body: JSON.stringify(updateOn),
   headers:{"Content-Type":"application/json"},
}).then((res)=>{
//    console.log(res);
//    setSubscribed(true);
}).catch((e)=> console.log("ERROR"))  
}

const unsubscribeChannel=(userEmail,channelName)=>{
const updateOn={
    email:userEmail,
    channelName:channelName,
    
}
    fetch("https://youtubeclonee.herokuapp.com/register/unsubscribechannel",
    {
        method:"PUT",
        body: JSON.stringify(updateOn),
        headers:{"Content-Type":"application/json"},
    }).then((res)=>{
        handleClose();
        // console.log(res);
        // setSubscribed(false)
        
    }).catch((e)=> console.log("ERROR")) 


}
const updatesubcribtion=(userEmail,channelName,status)=>{
const updateOn={
    channelName:channelName,
    subscribed:status
    
}

    fetch("https://youtubeclonee.herokuapp.com/channel/updatesubcription",
    {
        method:"PUT",
        body: JSON.stringify(updateOn),
        headers:{"Content-Type":"application/json"},
    }).then((res)=>{
        
        if(res.status==200)
        {
           
            if(subscribed)
            {
                setSubscriber(subscriber-1)
                setSubscribed(!subscribed)
               
            }
            
            else
            {
                setSubscriber(subscriber+1)
                setSubscribed(!subscribed)
               
            }
            
        }
        
    }).catch((e)=> console.log(e)) 


}


    return (
        <div className="channelRow">
        
        <Avatar className="channelRow_logo"
        alt={channelName} src={image} />
        <div className="ChannelRow_detail">
        <div className="ChannelRow_text">
        <h4>{channelName}</h4>
        <p>{subscriber} subscribers . {noOfVideos} videos</p>
        <p>{description}</p>
        </div>

          <div>
          {subscribed? <Button variant="text"
        className="subscribe_btn"
        onClick={handleOpen}
        >subscribed</Button> : <Button variant="text"
        className="btn_color"
        onClick={()=>{
            updatesubcribtion(userEmail,channelName,!subscribed)
            addsubscribedCannel(userEmail,channelName)}}
        >subscribe</Button>}
        <Modal
        open={open}
        onClose={handleClose}

      >
        <Box sx={{ ...style, width: 300 }}>
          <h4>Unsubscribe from {channelName} ?</h4>
          <br/>
          <hr/>
          <br/>
          <Button onClick={handleClose} >cancel</Button>
          <Button onClick={()=>{
            updatesubcribtion(userEmail,channelName,!subscribed)
              unsubscribeChannel(userEmail,channelName)}}
          >unsubscribe</Button>
          

        </Box>
      </Modal>
      </div>   
          </div> 

        
        <hr/>
        
        </div>
    )
}

export default ChannelRow
