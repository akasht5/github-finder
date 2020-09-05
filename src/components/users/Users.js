import React,{ useContext,Fragment } from 'react'
import GithubContext from '../../context/github/githubContext'
import UserItem from './UserItem'
import Loader from '../layout/Loader'

const Users = () => {
    const githubContext = useContext(GithubContext);
    const { users,loading } = githubContext;

    if(loading){
        return <Loader />
    }else if(users === null){
        return ''
    }else if(users.length === 0){ 
        return <h3> No Users Found</h3>
    }
    
    return (
        <Fragment>
        <span style={style}>Github Users</span>
        <div className="users">
        {
            users.map(user => <UserItem key={user.id} user={user} />)
        }
        </div>
        </Fragment>
    ) 
}

const style = {
    fontSize:'18px'
}

export default Users
