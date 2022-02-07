import React from 'react';
import "../Tags.css";
import Pagination from '@mui/material/Pagination';
import Carousel from 'react-material-ui-carousel';

const data=["All","Song","JavaScript","MongoDB","NodeJS","Film","Html","Css","Song","JavaScript","Song","JavaScript","MongoDB","NodeJS","Film","Html","Css","MongoDB","NodeJS","Film","Html","Css","New to you"]
const Tags = () => {
    // console.log(data)
    return (
        <div className="tag_row">
        <div className="emptytag_container">
        </div>
        <div className="tag_container">
        {data.map((t,index)=>(
            
            <div className="tag_box">{t}</div>
        )
                
            )}
            </div>
        </div>
    )
}

export default Tags



// {data.map((t,index)=>{
//     return (<div className="tagbox">
//             {test}
//     </div>)
// })}