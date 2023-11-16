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
            <div className="contact-title">
                Contact Us
            </div>
            <div className="contact-detail">
                <p>For enquiries, call us or message us</p>
                <p>Tuesday to Friday 11am and 7pm (Melbourne time).</p>
                <p>Saturday to Sunday 10am and 6pm (Melbourne time).</p>
            </div>
            <div className="contact-detail">
                <p>792 Burwood Rd, Camberwell, VIC 3124  |  Phone: (03) 7008 5007 |  Email. hello@sinobeats.com.au</p>
            </div>
            <div className="contact-form">
                <Input placeholder="First Name" value={firstName} onChange={e=>setFirstName(e.target.value)}/>
                <Input placeholder="Last Name" value={lastName} onChange={e=>setLastName(e.target.value)}/>
                <Input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)}/>
                <InputArea placeholder="Message" value={message} onChange={e=>setMassage(e.target.value)}/>
            </div>
            <div className="contact-button">
                Submit
            </div>
        </div>
    )
}

export default Index;