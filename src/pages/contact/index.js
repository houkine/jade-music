import { Link } from "react-router-dom"
import './index.css'
import { useState } from 'react';
import Input from '../../components/input'
import InputArea from '../../components/inputArea'


const Index = () =>{
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMassage] = useState('')

    return(
        <div className="contact-container">
            <div className="contact-title1">
                Contact Us
            </div>
            <div className="contact-line" />
            <div className="contact-title2">
                Office
            </div>
            <div className="contact-detail">
                <div className="contact-decoration">EMAIL</div>
                <div>echoofjademusic@gmail.com</div>
            </div>
            <div className="contact-detail">
                <div className="contact-decoration">NUMBER</div>
                <div>0420 378 345</div>
            </div>
            <div className="contact-detail">
                <div className="contact-decoration">POSTAL ADDRESS</div>
                <div>Shop 3/223 Calam Road, Sunnybank Hills</div>
            </div>
        </div>
    )
}

export default Index;