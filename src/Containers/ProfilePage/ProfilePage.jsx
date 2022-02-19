import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../../Components/Navbar/Navbar'
import "../../Style/Containers/ProfilePage.css"

function ProfilePage() {
    return (
        <div className="profile-page">
            <NavBar/>
            <h1 style={{textAlign:'center'}}>PROFILE PAGE</h1>
            <Link to="/">home</Link>
        </div>
    )
}

export default ProfilePage
