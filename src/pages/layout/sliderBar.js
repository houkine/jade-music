import {useState,useContext} from 'react'
import './index.css'
import { BsFacebook,BsInstagram,BsTwitter } from "react-icons/bs";
import routerList from '../../constant/router'
import languageContext,{CN,EN} from "../../constant/language";

const Index = ({isOpen,tab,TabOnClick,onClose}) =>{
    const language = useContext(languageContext)

    return(
        <div className={isOpen?"sliderbar-container":"sliderbar-container-close"}>
            {routerList.map((router,index)=>(
                <div 
                    className={tab===router.navigate?"sliderbar-header-tag-selected":"sliderbar-header-tag"}
                    onClick={()=>TabOnClick(router)}
                >{language===EN?router.title_en:router.title_cn}</div>
            ))}
        </div>
    )
}

export default Index;