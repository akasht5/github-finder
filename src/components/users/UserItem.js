import React from 'react'
import { Link } from 'react-router-dom'

const UserItem = ({ user:{avatar_url,login} }) => {
    return (
        <div className="card text-center" style={cardStyle}>
            <img src={avatar_url} alt={login} style={userImg}/>
            <span className="login">{login}</span>
            <div>
                <button className="gitbtn"><Link to={`/user/${login}`} style={button} >View Profile</Link></button>
            </div>
        </div>
    )
}

const userImg = {
    width : '100px',
    height : '100px',
    borderRadius : '100px',
}

const button = {
    color : '#772CE8'
}

const cardStyle = {
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:'10px'
}

export default UserItem
