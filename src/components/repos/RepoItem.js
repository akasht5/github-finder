import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch,faStar } from '@fortawesome/free-solid-svg-icons'

const RepoItem = ({repo}) => {
    const {name,description,html_url,language,forks_count,stargazers_count,updated_at} = repo;
    
    return (
        <div>
            <li className="repo">
                <a href={html_url} className="repo-name">{name}</a>
                <p className="repo-description">{description}</p>
                <span className="repo-other-info" style={otherinfo}>
                    {language && (<span style={languagee}>{language}</span>)}
                    {forks_count>0 && (<span style={icon}><FontAwesomeIcon icon={faCodeBranch} />{' '}{forks_count}</span>)}
                    {stargazers_count>0 && (<span  style={icon} ><FontAwesomeIcon icon={faStar} />{' '}{stargazers_count}</span>)}
                    <span>Updated on {updated_at}</span>
                </span>
            </li>
        </div>
    )
}

const languagee = {
    background:'lightcyan',
    padding:'0px 7px',
    borderRadius:'10px',
    border:'0.5px solid black',
    marginRight:'10px',
}

const icon = {
    fontSize:'12px',
    marginRight:'10px',
}

const otherinfo = {
    fontSize:'14px'
}

export default RepoItem
