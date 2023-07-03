import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import UserProfile from "./pages/UserProfile";
import Appp from "./Appp";


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/user" element={<UserProfile/>}/>
                <Route path="/app" element={<Appp/>}/>
            </Routes>
        </Router>
    );
}

export default App;
