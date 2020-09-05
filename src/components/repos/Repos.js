import React from 'react'
import RepoItem from './RepoItem'

const Repos = ({repos,public_repos}) => {
    return (
        <div className="repos">
            <span>Public Repositories</span><span className="badge2">{public_repos}</span>
            <hr className="repos-line" />

            <div className="repos-list">
                <ul>
                    {repos.map(repo => <RepoItem repo={repo} key={repo.id} />)}
                </ul>
                
            </div>
        </div>
    )
        
    
        
}

export default Repos
