import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "../../Style/Components/NavBar.css"

function NavBar() {
    return (
        <div className="NavBar">
            
            <div className='nav-bar-logo'><span>=</span><span>ISIKOLTU</span></div>
            <div >
                <input className='nav-search' placeholder="Search"/>
            </div>
            <div>
                <Link to="/login">
                    <Button className="navbar-button secondary" variant="secondary" type="submit" >
                        Login
                    </Button></Link>
                <Link to="/sign-up">
                    <Button className="navbar-button primary" variant="primary" type="submit">
                        Sign Up
                    </Button>
                </Link>
                
            </div>
            <Link to="/profile">
                    <FontAwesomeIcon icon={faUserCircle} style={{color:'#bdbdbd' , width:"50px", height:'50px' ,marginTop:'20px' , marginLeft:'50px' }}/>
                </Link>
        </div>
    )
}

export default NavBar
