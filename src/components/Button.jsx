import React from 'react'

const Button = ({btnName ,functionName}) => {
    return (
        <div className="p-0">
            <button className="bg-white btn btn-neutral btn-outline px-32 hover:bg-gray-900" onClick={functionName}>{btnName}</button>
        </div>
    )
}

export default Button