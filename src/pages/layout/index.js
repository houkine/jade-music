
import './index.css'
import Dropdown from '../../components/dropdown'

import { IconContext } from "react-icons";
import { useNavigate, useLocation, Outlet } from "react-router-dom"

import routerList from '../../constant/router'
import logo from '../../assert/logo/logo.jpg';
import FloatingWindow from './floatingWindow';
import SliderBar from './sliderBar';

import { AiOutlineUnorderedList, } from "react-icons/ai";
import { useEffect, useState, useContext } from "react";
import languageContext,{CN,EN} from "../../constant/language";

const Index = () =>{
    const navigate = useNavigate()
    const location = useLocation()

    const [tab,setTab] = useState()
    const [language,setLanguage] = useState('en')

    useEffect(()=>setTab(location.pathname),[])

    const TabOnClick = router =>{
        navigate(router.navigate)
        setTab(router.navigate)
    }

    return(
        <languageContext.Provider value={language}>
            <div className="layout-container">
                <div className="layout-header">
                    <img className="layout-header-logo" onClick={()=>navigate('/')} src={logo} alt='' />
                    <div className="layout-header-tagbar">
                        {routerList.map((router,index)=>(
                            <div 
                                className={tab===router.navigate?"layout-header-tag-selected":"layout-header-tag"}
                                onClick={()=>TabOnClick(router)}
                            >{language===EN?router.title_en:router.title_cn}</div>
                        ))}
                    </div>
                    <div className="layout-header-languagebar">
                        <div 
                            className={language===CN?"layout-header-languageicon-selected":"layout-header-languageicon"}
                            onClick={()=>setLanguage(CN)}
                        >{'中'}</div>
                        <div className="layout-header-languageicon">{'|'}</div>
                        <div 
                            className={language===EN?"layout-header-languageicon-selected":"layout-header-languageicon"}
                            onClick={()=>setLanguage(EN)}
                        >{'EN'}</div>
                    </div>
                    <div className="layout-header-slider-icon">
                        <AiOutlineUnorderedList className="layout-header-slider" size="20"/>
                    </div>
                </div>
                <div className="layout-body">
                    <Outlet />
                </div>
                <FloatingWindow />
                {/* <SliderBar /> */}
                
            </div>
        </languageContext.Provider>
    )
}

export default Index;