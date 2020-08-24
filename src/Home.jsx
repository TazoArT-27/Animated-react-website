import React from 'react';
import {NavLink} from 'react-router-dom'
import web from '../src/images/Creating process_.png'
import Common from './Common';
const Home = () => {
    return (
        <div>
            <Common name="Grow your business with " imgsrc={web} visit='/services' btname='Get Started'></Common>
        </div>
    );
};





export default Home;