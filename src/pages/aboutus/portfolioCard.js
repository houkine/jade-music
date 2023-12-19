import './index.css'
import teacherAvatar from '../../teacher-3.jpg';
import { useState,useContext } from 'react';

import { useNavigate } from "react-router-dom";

import languageContext,{CN,EN} from "../../constant/language";

const Index = ({teacher}) =>{
    const navigate = useNavigate();
    const language = useContext(languageContext)
    return(
        <div className="portfolioCard-container">
            <div 
                className="portfolioCard-content"
                onClick={()=>navigate("/about-us/"+teacher.id)}
            >
                <img className="portfolioCard-content-image" src={teacher.avatar} alt=''/>
                <div className="portfolioCard-content-name">{language===EN?teacher.name_en:teacher.name_cn}</div>
                <div 
                    className="portfolioCard-content-detail"
                    style={teacher.position_style}
                >{language===EN?teacher.position_en:teacher.position_cn}</div>
                <div className="portfolioCard-content-detail">{language===EN?teacher.instrement_en:teacher.instrement_cn}</div>
            </div>
        </div>
    )
}

export default Index;

