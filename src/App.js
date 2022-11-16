import './App.css'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Header} from "./Sections/Header/Header";
import {Container} from "./components/Container/Container";
import {Footer} from "./Sections/Footer/Footer";
import Home from "./Pages/Home/Home";
import Profile from "./Pages/Profile/Profile";
import Streams from "./Pages/Streams/Streams";
import Browse from "./Pages/Browse/Browse";

const App = () => {
    return (
        <>
            <Router>
                <Header/>
                <Container>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/profile' element={<Profile/>}/>
                        <Route path='/streams' element={<Streams/>}/>
                        <Route path='/browse' element={<Browse/>}/>
                    </Routes>
                </Container>
                <Footer/>
            </Router>
        </>

    );
}
export default App;