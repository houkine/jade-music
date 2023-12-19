import {useState} from 'react'
import './index.css'
import { BsFacebook,BsInstagram,BsTwitter } from "react-icons/bs";

const Index = () =>{

    const [isOpen, setIsOpen] = useState(true)

    return(
        <div className="floatingWindow-container">
            <div 
                className="floatingWindow-switch"
                onClick={()=>setIsOpen(!isOpen)}
            >{isOpen?'-':'+'}</div>
            
            {isOpen && <div className="floatingWindow-content">
                <BsFacebook className="floatingWindow-content-item" size={20} onClick={()=>window.open('https://www.facebook.com/echoofjademusiccollective')}/>
                <BsInstagram className="floatingWindow-content-item" size={20} onClick={()=>window.open('https://www.instagram.com/echoofjademusiccollective?fbclid=IwAR2sVhRspv9xXjwOe119YgcDEGWin0EGgdzdCLqwmNb5PxUkFDD2b4XmIRY')}/>
                <BsTwitter className="floatingWindow-content-item" size={20} onClick={()=>window.open('https://www.youtube.com/@EchoofJadeMusicCollective')}/>
            </div>}
        </div>
    )
}

export default Index;