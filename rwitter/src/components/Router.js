import React from 'react';
import {HashRouter as Router,Route,Routes} from 'react-router-dom'
import Home from '../routes/Home.js';
import Auth from '../routes/Auth.js';
import Profile from '../routes/Profile.js';

const AppRouter = ({isLoggedIn}) => {

    return (
        <Router>
            <Routes>
                {isLoggedIn ? <Route path="/" element={<Auth/>}/>
                :
                <Route path="/" element={<Home/>}/>}
            </Routes>
        </Router>
    )
}

export default AppRouter;