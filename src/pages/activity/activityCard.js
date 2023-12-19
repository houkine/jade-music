import { Link } from "react-router-dom"
import { useContext } from 'react';
import './index.css'
import { AiFillFacebook,AiFillInstagram,AiFillTwitterSquare } from "react-icons/ai";
import languageContext,{CN,EN} from "../../constant/language";

const Index = ({activity}) =>{
    const language = useContext(languageContext)

    return(
        <div className="activityCard-container">
            <img className="activityCard-image" src={activity.image} alt=""/>
            <div className="activityCard-content">
                <div className="activityCard-content-detail">
                    <div className="activityCard-font2">{language===EN?activity.title_en:activity.title_cn}</div>
                    <div className="activityCard-font1">{activity.time}</div>
                    <div className="activityCard-font1">{activity.address}</div>
                    <div className="activityCard-font1">{activity.phone}</div>
                </div>
                <div className="activityCard-content-link">
                    {activity.Facebook && <AiFillFacebook className="activityCard-content-item" size={30} onClick={()=>window.open(activity.Facebook)}/>}
                    {activity.Instagram && <AiFillInstagram className="activityCard-content-item" size={30} onClick={()=>window.open(activity.Facebook)}/>}
                    {activity.Youtube && <AiFillTwitterSquare className="activityCard-content-item" size={30} onClick={()=>window.open(activity.Facebook)}/>}
                </div>
            </div>
        </div>
    )
}

export default Index;