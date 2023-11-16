import Dropdown from 'react-bootstrap/Dropdown'
import './index.css'

const Index = ({name, options, onClick}) =>{
    return(
        <div className="dropdown-container">
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic" className="dropdown-content">
                    {name}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                {options.map((option,index)=>(
                    <Dropdown.Item href={option.href}>{option.title}</Dropdown.Item>
                ))}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

export default Index;