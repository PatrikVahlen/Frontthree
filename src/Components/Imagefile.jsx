import React from 'react'

export default function Imagefile(props) {
    return (
        <img
            className="App-logo"
            src={props.imageURL}
            alt={props.description}
        />
    )
}
