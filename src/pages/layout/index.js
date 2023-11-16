import { Outlet  } from "react-router-dom"
import './index.css'
import Dropdown from '../../components/dropdown'

import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom"

import routerList from '../../constant/router'
import logo from '../../logo.svg';
import FloatingWindow from './floatingWindow';
import sliderBar from './sliderBar';

import { AiOutlineUnorderedList, } from "react-icons/ai";

const Index = () =>{
    const navigate = useNavigate()

    return(
        <div className="layout-container">
            <div className="layout-header">
                <div className="layout-header-logo" onClick={()=>navigate('/')}>
                    MUSIC
                </div>
                <div className="layout-header-tagbar">
                    {routerList.map((router,index)=>(
                        <div className="layout-header-tag" onClick={()=>navigate(router.navigate)}>{router.title}</div>
                    ))}
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
    )
}

export default Index;