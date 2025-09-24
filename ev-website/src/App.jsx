import { useEffect, useState } from 'react';
import Background from './Components/Background/Background';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';

const App = () => {

    let heroData = [
        { text1: "Dive into", text2: "What you love" },
        { text1: "Text content 3", text2: "Text content 4" },
        { text1: "Text content 5", text2: "Text content 6" }
    ]

    const [heroCount, setHeroCount] = useState(0);
    const [playStatus, setPlayStatus] = useState(false);

    useEffect(() => {
        setInterval(() => {
            setHeroCount((count) => { return count === 2 ? 0 : count + 1 });
        }, 3000);
    }, [])

    return (
        <div>
            <Background heroCount={heroCount} playStatus={playStatus} />
            <Navbar />
            <Hero
                setPlayStatus={setPlayStatus}
                heroCount={heroCount}
                setHeroCount={setHeroCount}
                heroData={heroData[heroCount]}
                playStatus={playStatus}
            />
        </div>
    );
};

export default App;