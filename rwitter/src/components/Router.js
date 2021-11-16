import React from 'react';
import {HashRouter as Router,Route,Routes} from 'react-router-dom'
import Home from '../routes/Home.js';
import Auth from '../routes/Auth.js';
import Profile from '../routes/Profile.js';
import Navigation from './Navigation.js';

const AppRouter = ({isLoggedIn,userObj,refreshUser}) => {

    return (
        <Router>
            {isLoggedIn && <Navigation userObj={userObj}/>}
            <Routes>

                {isLoggedIn ? (
                    <>
                <Route path="/" element={<Home userObj={userObj}/>}/>
                <Route path="/profile" element={<Profile refreshUser={refreshUser} userObj={userObj}/>}/>
                </>
                )
                :
                <Route path="/" element={<Auth/>}/>}
        
            </Routes>
        </Router>
    )
}

export default AppRouter;