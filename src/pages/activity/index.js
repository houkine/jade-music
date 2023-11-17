import { Link } from "react-router-dom"
import { useState } from 'react';
import './index.css'
import activityList from '../../constant/activity'
import ActivityCard from './activityCard'

const EventList = [
    'Upcoming Events',
    'Past Events',
]

const getActivityList = () =>{

}
const Index = () =>{
    const [number, setNumber] = useState(0)

    return(
        <div className="activity-container">
            {/* <div className="activity-header">
                <div 
                    className="activity-content-title-arrow"
                    onClick={()=>number>0&&setNumber(number-1)}
                >
                    {'<'}
                </div>
                <div className="activity-content-title">
                    {EventList[number]}
                </div>
                <div 
                    className="activity-content-title-arrow"
                    onClick={()=>number<EventList.length-1&&setNumber(number+1)}
                >
                    {'>'}
                </div>
            </div> */}
            <div className="activity-content-list">
                {activityList.map((activity,index)=>
                    // activity.category==EventList[number]&&
                    (
                        <ActivityCard activity={activity}/>
                    )
                )}
            </div>
        </div>
    )
}

export default Index;