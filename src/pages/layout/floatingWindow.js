import {useState} from 'react'
import './index.css'
import { BsFacebook,BsInstagram,BsTwitter } from "react-icons/bs";

const Index = () =>{

    const [isOpen, setIsOpen] = useState(false)

    return(
        <div className="floatingWindow-container">
            <div 
                className="floatingWindow-switch"
                onClick={()=>setIsOpen(!isOpen)}
            >{isOpen?'-':'+'}</div>
            
            {isOpen && <div className="floatingWindow-content">
                <BsFacebook className="floatingWindow-content-item" size={20} onClick={()=>window.open('https://www.facebook.com/ywmusic88')}/>
                <BsInstagram className="floatingWindow-content-item" size={20}/>
                <BsTwitter className="floatingWindow-content-item" size={20}/>
            </div>}
        </div>
    )
}

export default Index;