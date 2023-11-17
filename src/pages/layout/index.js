
import './index.css'
import Dropdown from '../../components/dropdown'

import { IconContext } from "react-icons";
import { useNavigate, useLocation, Outlet } from "react-router-dom"

import routerList from '../../constant/router'
import logo from '../../logo.svg';
import FloatingWindow from './floatingWindow';
import sliderBar from './sliderBar';

import { AiOutlineUnorderedList, } from "react-icons/ai";
import { useEffect, useState, useContext } from "react";
import languageContext from "../../constant/language";

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
                    <div className="layout-header-logo" onClick={()=>navigate('/')}>
                        MUSIC
                    </div>
                    <div className="layout-header-tagbar">
                        {routerList.map((router,index)=>(
                            <div 
                                className={tab==router.navigate?"layout-header-tag-selected":"layout-header-tag"}
                                onClick={()=>TabOnClick(router)}
                            >{language=='en'?router.title_en:router.title_cn}</div>
                        ))}
                    </div>
                    <div className="layout-header-languagebar">
                        <div 
                            className={language=='cn'?"layout-header-languageicon-selected":"layout-header-languageicon"}
                            onClick={()=>setLanguage('cn')}
                        >{'中'}</div>
                        <div className="layout-header-languageicon">{'|'}</div>
                        <div 
                            className={language=='en'?"layout-header-languageicon-selected":"layout-header-languageicon"}
                            onClick={()=>setLanguage('en')}
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
                <sliderBar />
                
            </div>
        </languageContext.Provider>
    )
}

export default Index;