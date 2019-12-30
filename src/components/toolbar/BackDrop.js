import React from 'react'

const BackDrop = props => {
    return (
        <div className="backdrop" onClick={props.click}/>
    )
}

export default BackDrop
