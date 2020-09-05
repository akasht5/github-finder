import React,{ useContext } from 'react'
import AlertContext from '../../context/alert/alertContext'

const Alert = () => {
    const alertContext = useContext(AlertContext);
    const { alert } = alertContext;

    return (
        alert !== null && (<div class="alert2" style={color}>
            <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
            <span>{alert}</span>
        </div>)
        
    )
}

const color = {
    background : 'lightblue',
    height : '45px',
    width : '100%',
    borderRadius : '5px',
    display:'flex',
    alignItems:'center',
    paddingLeft:'10px',
}

export default Alert
