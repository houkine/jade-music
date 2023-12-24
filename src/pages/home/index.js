import { Link } from "react-router-dom"
import './index.css'
import AboutusList from '../../assert/aboutus';
import { useState, useEffect } from "react";

const getBG = (index) => AboutusList[index]
const Index = () => {
    const [index, setIndex] = useState(0)
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIndex(index === AboutusList.length - 1 ? 0 : index + 1);
        }, 5000);

        return () => clearTimeout(timeoutId);
    }, [index]);
    return (
        <div className="home-container">
            <div className="home-content">
                <img className="home-bg" src={getBG(index)} alt=""></img>
            </div>
            <div className="home-buttonList">
                {AboutusList.map((a, i) => (<div className={i === index ? "home-button-selected" : "home-button"} onClick={() => setIndex(i)} />))}
            </div>
        </div>
    )
}

export default Index;
