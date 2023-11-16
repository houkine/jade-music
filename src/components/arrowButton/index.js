import Dropdown from 'react-bootstrap/Dropdown'
import './index.css'

const Index = ({content, onClick}) =>{
    return(
        <div className="arrowButton-container"
            onClick={onClick}
        >
            {content}
        </div>
    )
}

export default Index;