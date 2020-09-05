import React from 'react'
import Spinner from '../../assets/spinner2.gif'

const Loader = () => {
    return (
        <div>
            <img src={Spinner} alt="Loading spinner" style={loadingImg} />
        </div>
    )
}

const loadingImg = {
    width:'50px',
    height:'50px',
    position:'fixed',
    left:'48.5%',
    top:'47%'
}

export default Loader
