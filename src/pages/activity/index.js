import { Link } from "react-router-dom"
import { useState } from 'react';
import './index.css'
import activityList from '../../constant/activity'
import ActivityCard from './activityCard'


const Index = () =>{
    const [number, setNumber] = useState(0)

    return(
        <div className="activity-container">
            <div className="activity-content-list">
                {activityList.map((activity,index)=>
                    (
                        <ActivityCard activity={activity}/>
                    )
                )}
            </div>
        </div>
    )
}

export default Index;