import { Link } from "react-router-dom"
import './index.css'
import { useState } from "react";
import PerformanceHireList from '../../assert/aboutus';


const Index = () =>{
    const [number, setNumber] = useState(0)

    return(
        <div className="performancehire-container">
            <div className="performancehire-title">
                Performance Hire
            </div>
            <div className="performancehire-about">
                <p>SINOBEATS specializes in immersive Chinese and Western music education and cultural interactions for individuals of all age groups. Our diverse offerings include captivating school incursions designed to engage and inspire students.</p>
                <p>If you're seeking to enhance your event with our unique expertise, whether it's for a school gathering or a corporate occasion, we invite you to complete the form below. Our dedicated event manager will promptly reach out to you, ensuring a seamless and enriching experience for your audience.</p>
            </div>
            <div className="performancehire-content">
                <div className="performancehire-content-list">
                    {PerformanceHireList.map((performanceHire,index)=>(
                        <div 
                            className={"performancehire-content-image"}
                            onClick={()=>setNumber(index)}
                        >
                            <img className="performancehire-content-image" src={performanceHire}></img>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    )
}

export default Index;