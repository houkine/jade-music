import { Link } from "react-router-dom"
import { useState } from 'react';
import './index.css'
import { AiFillFacebook,AiFillInstagram,AiFillTwitterSquare } from "react-icons/ai";
const EventList = [
    'Upcoming Events',
    'Past Events',
]
const Index = ({activity}) =>{
    return(
        <div className="activityCard-container">
            <img className="activityCard-image" src={activity.image}/>
            <div className="activityCard-content">
                <div className="activityCard-content-detail">
                    <div className="activityCard-font2">{activity.title_en}</div>
                    <div className="activityCard-font1">{activity.time}</div>
                    <div className="activityCard-font1">{activity.address}</div>
                    <div className="activityCard-font1">{activity.announcement}</div>
                </div>
                <div className="activityCard-content-button" >RSVP Closed</div>
                <div className="activityCard-content-link">
                    <AiFillFacebook size={30}/>
                    <AiFillInstagram size={30}/>
                    <AiFillTwitterSquare size={30}/>
                </div>
            </div>
        </div>
    )
}

export default Index;