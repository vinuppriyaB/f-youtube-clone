import React ,{useState} from 'react';
import "../SidebarRow.css";

const SidebarRow = ({title,icon,select,setSelect,index,space}) => {
    
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
        <div className={`sidebarRow ${select[index] && "selected"}`} 
        onClick={sidebarSelection}
        >
        <div className="sidebarRow_icon ">{icon}</div>
        <h1 className="sidebarRow_title">{title}</h1>
        
        </div>
        <div >
        {(title=="Subscription"||title=="Show more")? <hr className="sidebar_hr" /> :""} 
        </div>
        </div>  
    )
}

export default SidebarRow
