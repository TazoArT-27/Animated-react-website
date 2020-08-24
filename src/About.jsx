import React from 'react';
import {NavLink} from 'react-router-dom'
import web from '../src/images/Creating process_.png'
import Common from './Common';
const About = () => {
    return (
        <div>
            <Common name="Welcome to about page of " imgsrc={web} visit="/contact" btname="Contact Now"></Common>
        </div>
    );
};



{/* <div className="container-fluid nav-bg">
<div className="row">
    <div className="col-10 mx-auto">
    </div>
</div>
</div> */}

export default About;