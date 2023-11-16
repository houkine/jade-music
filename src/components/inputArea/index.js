import './index.css'

const Index = ({placeholder, value, onChange}) =>{
    return(
        <textarea 
            className="textarea-container" 
            value={value} 
            onChange={onChange}
            placeholder={placeholder}
            rows="4"
        />
    )
}

export default Index;