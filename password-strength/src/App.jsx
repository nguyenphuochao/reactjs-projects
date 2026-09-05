import React, { useState } from 'react'
import "./App.css"
import arrowIcon from "./assets/arrow.png"

const App = () => {
    const [status, setStatus] = useState("");

    const handleChangePassword = (e) => {
        const target = e.target.value;
        const valueLength = target.length;

        if (valueLength > 0 && valueLength < 4) {
            setStatus("weak");
        } else if (valueLength >= 4 && valueLength <= 7) {
            setStatus("medium");
        } else if (valueLength > 7) {
            setStatus("strong");
        } else {
            setStatus("")
        }
    }

    // console.log(status);

    return (
        <div className='container'>
            <input
                onChange={handleChangePassword}
                className={status}
                type="password"
                name='password'
                placeholder='Password'
            />
            <img className='icon' src={arrowIcon} alt="" />

            {
                status && (
                    <p className={`${status} error`}>
                        Password is {status}
                    </p>
                )
            }
        </div>
    )
}

export default App