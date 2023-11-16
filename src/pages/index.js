import { Route,Routes,HashRouter } from "react-router-dom"
import Home from './home'
import Aboutus from './aboutus'
import Activity from './activity'
import Layout from './layout'
import Performancehire from './performancehire'
import Lesson from './lesson'
import Contact from './contact'
import Biography from './biography'

const Index = () =>{
    return(
        <HashRouter>
            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route path="/" element={<Home />} />
                    <Route path="/about-us" element={<Aboutus />} 

                    />
                    <Route path="/about-us/*" element={<Biography />} />
                    <Route path="/activity" element={<Activity />} />
                    <Route path="/performance-hire" element={<Performancehire />} />
                    <Route path="/lesson" element={<Lesson />} />
                    <Route path="/contact" element={<Contact />} />
                </ Route>
            </Routes>
        </HashRouter>
    )
}


export default Index;
