import './index.css'
import teacherAvatar from '../../teacher-3.jpg';
import { useState } from 'react';

import teacherList from '../../constant/teacher'
import PortfolioCard from './portfolioCard'



const Index = () =>{

    const [number, setNumber] = useState(0)
    return(
        <div className="aboutus-container">
            <div className="aboutus-content-title">
                FEATURED ARTIST
            </div>
            <div className="aboutus-content-list">
                {teacherList.map((teacher,index)=>(
                        <div 
                            className={"aboutus-content-listItem"}
                            onClick={()=>setNumber(index)}
                        >
                            <PortfolioCard teacher={teacher} />
                        </div>

                    ))}
            </div>
        </div>
    )
}

export default Index;