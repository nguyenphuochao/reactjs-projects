import React, { useState } from 'react';
import "./StopWatch.css";
import stop from "../assets/stop.png";
import start from "../assets/start.png";
import reset from "../assets/reset.png";

let timerId = null;

const StopWatch = () => {
    const [second, setSecond] = useState(0);
    const [minute, setMinute] = useState(0);
    const [hour, setHour] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        if(isPlaying) return;

        timerId = setInterval(() => {
            setSecond(prev => prev + 1);
        }, 1000);

        setIsPlaying(true)
    }

    const handleStop = () => {
        clearInterval(timerId);
        setIsPlaying(false)
    }

    const handleReset = () => {
        setSecond(0);
        setMinute(0);
        setHour(0);

        clearInterval(timerId);
        setIsPlaying(false)
    }

    if(second > 59) {
        setSecond(0);
        setMinute(prev => prev + 1)
    }

    if(minute > 59) {
        setMinute(0)
        setHour(prev => prev + 1);
    }

    return (
        <div className='container'>
            <div className='stop-watch'>
                <h1>
                    <span>{hour < 10 ? `0${hour}` : hour}</span>:
                    <span>{minute < 10 ? `0${minute}` : minute}</span>:
                    <span>{second < 10 ? `0${second}` : second}</span>
                </h1>

                <div className='actions'>
                  
                    <img width={40} height={40} onClick={handleStop} src={stop} />
                    <img width={60} height={60} onClick={handlePlay} src={start} />
                    <img width={40} height={40} onClick={handleReset} src={reset} />
                
                </div>
            </div>
        </div>
    )
}

export default StopWatch