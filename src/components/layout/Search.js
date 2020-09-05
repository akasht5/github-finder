import React, { useState,useContext } from 'react'
import GithubContext from '../../context/github/githubContext'
import AlertContext from '../../context/alert/alertContext'

const Search = () => {
    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);
    
    const { searchUsers,clearUsers } = githubContext;
    const { setAlert } = alertContext;

    
    

    const [text,setText] = useState('');
    
    const onChange = (e) => setText(e.target.value);

    const onSubmit = (e) => {
        e.preventDefault();
        if(text===''){
            setAlert();
        }else{
            searchUsers(text);
            setText('');
        }
        
    }

        return (
            <div>
                <form onSubmit={onSubmit} className="form">
                    <input className="searchbtn" type="text" name="text" value={text} onChange={onChange} placeholder="Search Users ..." />
                    <input type="submit" value="Search" className="searchbtn btn bg-twitch btn-block" />
                </form>
                <button className="searchbtn btn btn-light btn-block" onClick={clearUsers}>Clear</button>
                <br/>            
            </div>
        )
}

export default Search