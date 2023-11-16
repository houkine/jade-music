import './index.css'
import teacherAvatar from '../../teacher-3.jpg';
import { useState } from 'react';

import { useNavigate } from "react-router-dom";

const Index = ({teacher, onclick}) =>{
    const navigate = useNavigate();
    return(
        <div className="portfolioCard-container">
            <div 
                className="portfolioCard-content"
                onClick={()=>navigate("/about-us/"+teacher.name_en)}
            >
                <img className="portfolioCard-content-image" src={teacher.avatar}></img>
                <div className="portfolioCard-content-name">{teacher.name_en}</div>
                <div className="portfolioCard-content-detail">{teacher.instrement}</div>
                <div className="portfolioCard-content-detail">{teacher.position}</div>
            </div>
        </div>
    )
}

export default Index;

