import React,{ Fragment,useEffect,useContext } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faLink } from '@fortawesome/free-solid-svg-icons'
import Spinner from '../layout/Loader'
import Twitter from '../../assets/twitter.svg'
import Gmail from '../../assets/gmail.svg'
import Location from '../../assets/location.svg'
import Repos from '../repos/Repos'
import GithubContext from '../../context/github/githubContext'

const User = ({match}) => {
    const githubContext = useContext(GithubContext);
    const { user,repos,getUser,getUserRepos,loading } = githubContext;
    const { avatar_url,name,bio,location,company,blog,email,twitter_username,public_repos,html_url} = user;
    
    useEffect(() => {
        getUser(match.params.login);
        getUserRepos(match.params.login);
    
    //eslint-disable-next-line
    },[])
    
    if(loading){
        return <Spinner />
    }

    return (
        <Fragment>
            <Link to='/' className="backbtn">{'<-- '}Back To Search</Link>
            <div className="user-header container">
            <div className="profile-photo">
                {avatar_url && <a href={html_url} className="imgStyle"><img src={avatar_url} alt={name} /></a>}
            </div>
            <div className="user-info">
                {name && <h2><a href={html_url} style={style}>{name}</a></h2>}
                <div className="bio">
                    {bio && <p>{bio}</p>}
                </div>
                <div className="other-info">
                    {location && <span><img src={Location}alt="location" style={icon}/> {location}</span>}
                    {email && <span><img src={Gmail} alt="gmail" style={icon}/> {email}</span>}
                    {company && <span><FontAwesomeIcon icon={faBuilding} style={icon}/> {company}</span>}
                    {twitter_username && <span><img src={Twitter} style={icon} alt="twitter" /> {twitter_username}</span>}
                    {blog && <span><FontAwesomeIcon icon={faLink} style={icon}/> {blog}</span>}
                </div> 
            </div>
        </div>
        <Repos repos={repos} public_repos={public_repos} />
        <div className="reposbtn"><a className="reposbtn" href={`https://github.com/${match.params.login}?tab=repositories`}>More Repositories {'->'}</a></div>
        </Fragment>
        
    )
}

const icon = {
    color:'black',
    height:'15px',
    width:'15px'
}

const style = {
    color:'black'
}

export default User
