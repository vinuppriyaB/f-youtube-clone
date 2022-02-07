import React ,{useState} from 'react';
import "../SidebarRow.css";
import Avatar from '@mui/material/Avatar';
import { useHistory } from 'react-router';


export const SidebarRow = ({title,icon,select,setSelect,index,space,channelName,logo}) => {
        const history = useHistory();
    const sidebarSelection=()=>{
        let selectCopy=[...select]
                for(let i=0;i<selectCopy.length;i++)
                {
                    if(i===index)
                    {
                        selectCopy[i]=true;
                    }
                    else
                    {
                        selectCopy[i]=false;
                    }
                }
                
            setSelect(selectCopy)
           

    }
    
    return (
        <div>
        {title ? <div className={`sidebarRow ${select[index] && "selected"}`} 
                onClick={sidebarSelection}
                >
                <div className="sidebarRow_icon ">{icon}

                </div>
                <h1 className="sidebarRow_title">{title}</h1>

                </div>:
                <div className={`sidebarRow ${select[index] && "selected"}`} 
                onClick={()=>{
                    sidebarSelection()
                    history.push(`/channelpage/${channelName}`)
                }}>
                <Avatar
                alt={channelName} src={logo}
                sx={{ width: 24, height: 24 }}
                 /> 
                <h1 className="sidebarRow_title">{channelName}</h1>  
                </div> }
        <div >
        {(title=="Subscription"||title=="Show more")? <hr className="sidebar_hr" /> :""} 
        </div>
        <div >
        {title=="Show more" ? <div className="sidebar_subscribe">SUBSCRIPTIONS</div>:""}

        </div>


        </div>  
        
    )
}

// export function SmlScrnSidebarRow({title,icon,select,setSelect,index,space}){
//     const sidebarSelection=()=>{
//         let selectCopy=[...select]
//                 for(let i=0;i<selectCopy.length;i++)
//                 {
//                     if(i===index)
//                     {
//                         selectCopy[i]=true;
//                     }
//                     else
//                     {
//                         selectCopy[i]=false;
//                     }
//                 }
                
//             setSelect(selectCopy)
           

//     }
//     return(

//         <div>
//         <div className={`sidebarRow ${select[index] && "selected"}`} 
//         onClick={sidebarSelection}
//         >
//         <div className="SSsidebarRow_icon ">{icon}</div>
//         <h1 className="SSsidebarRow_title">{title}</h1>
        
//         </div>
//         </div>
//     )
// }


