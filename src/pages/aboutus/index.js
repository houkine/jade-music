import './index.css'
import teacherAvatar from '../../teacher-3.jpg';
import { useState,useContext } from 'react';

import teacherList from '../../constant/teacher'
import PortfolioCard from './portfolioCard'
import languageContext,{CN,EN} from "../../constant/language";



const Index = () =>{

    const language = useContext(languageContext)
    return(
        <div className="aboutus-container">
            <div className="aboutus-content-title">
                {language===EN?'FEATURED ARTIST':'特色艺术家'}
            </div>
            <div className="aboutus-content-list">
                {teacherList.map((teacher,index)=>(
                    <div className={"aboutus-content-listItem"}>
                        <PortfolioCard teacher={teacher} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Index;