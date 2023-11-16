import './index.css'

const Index = ({placeholder, value, onChange}) =>{
    return(
        <input 
            className="input-container" 
            value={value} 
            onChange={onChange}
            placeholder={placeholder}
        />
    )
}

export default Index;