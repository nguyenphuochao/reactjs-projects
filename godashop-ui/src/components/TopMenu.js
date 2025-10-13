import React from 'react'

function TopMenu() {
    return (
        <div className="top-menu bg-dark">
            <div className="container d-flex justify-content-end py-2">
                <div className="login text-white pe-3">Login</div>
                <div className="register text-white">Register</div>
            </div>
        </div>
    )
}

export default TopMenu
