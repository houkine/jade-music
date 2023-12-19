import './index.css'
import { Link } from "react-router-dom"
import { useHref } from "react-router-dom"
import { useEffect,useState,useContext } from 'react';
import teacherList from '../../constant/teacher'
import languageContext,{CN,EN} from "../../constant/language";

import { BiSolidUpArrow,BiSolidDownArrow } from "react-icons/bi";


const Index = () =>{
    const href = useHref()
    const [teacher, setTeacher] = useState()
    const language = useContext(languageContext)
    useEffect(() => {
      let t_id_array=href.split('/')
        for (let index = 0; index < teacherList.length; index++) {
            if (teacherList[index].id==t_id_array[t_id_array.length-1])
            {setTeacher(teacherList[index])}
        }
    }, [])
    
    return(
        <div className="biography-container" >
            <div className="biography-title">
                <div className="biography-font2">{teacher?.name_cn}</div>
                <div className="biography-instrement">{teacher?.instrement}</div>
            </div>
            <div className="biography-content">
                <img className="biography-content-img" src={teacher&&teacher.avatar} alt=''/>
                <div className="biography-content-about">
                    {language==EN?teacher?.about_en.split('\n').map((para,index)=><p>{para}</p>):teacher?.about_cn.split('\n').map((para,index)=><p>{para}</p>)}
                </div>
            </div>
        </div>
    )
}

const Sector = ({title,content}) =>{
    const [isOpen, setIsOpen] = useState(true)
    const ButtonOnClick = () =>setIsOpen(!isOpen)
    return(
        <div className="biography-sector-container">
            <div className="biography-sector-switch" onClick={ButtonOnClick}>
                {isOpen?
                    <BiSolidUpArrow className="biography-sector-switch-icon"/>:
                    <BiSolidDownArrow className="biography-sector-switch-icon" />
                }
                <div className="biography-sector-switch-title">{title}</div>
            </div>
            {isOpen&&<div className="biography-sector-content">
                {content.map((c,index)=>(<p>{c}</p>))}
            </div>}
        </div>
    )
}

export default Index;