import React from 'react'

const About = () => {
    return (
        <div>
            <h3 style={header}>About This App</h3>
            <p style={para}>This app allows a user to search any github users.This app is build with React.js and Github API</p>
            <p style={para}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem voluptates qui, architecto excepturi dolorum ad quos cumque commodi aut numquam omnis ut explicabo maxime ipsa nesciunt quam repudiandae veniam minus.</p>
            <span style={version}>Version 1.0.1</span>
        </div>
    )
}

const header = {
    margin:`20px 0px`
}
const para = {
    marginBottom : '20px',
    fontSize:'16px'
}
const version = {
    fontSize:'16px'
}

export default About
