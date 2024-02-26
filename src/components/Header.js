import React from 'react'

const Header = ({ heading }) => {
    return (
        <h1 className="sm:text-3xl text-2xl font-semibold text-center">
            {heading}
        </h1>
    )
}

export default Header