import React,{ Fragment } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <Fragment>
            <div className="navbarr github-navcolor">
                <span><i className="fab fa-github"></i> Github Finder</span>
                <ul>
                    <li><Link to='/'>Home </Link></li>
                    <li><Link to='/about'>About</Link></li>
                </ul>
            </div>
        </Fragment>
    )
}

export default Navbar
