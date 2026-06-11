import { useEffect, useState } from "react";
import "./Quote.css";

const baseUrl = "https://api.quotable.io/random";

const Quote = () => {
    const [loading, setLoading] = useState(true);
    const [quote, setQuote] = useState(null);

    const getQuote = async () => {
        try {
            setLoading(true);
            await sleep(3000)
            let res = await fetch(baseUrl);
            let data = await res.json();
            setQuote(data)
            console.log(data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    const handleNewQuote = () => {
        if (loading) return;
        getQuote();
    }

    const handleShareTweet = () => {
        if (loading) return;
        window.open(`https://twitter.com/intent/tweet?text=${quote.content} by ${quote.author}`, "Tweet Window", "width=600, height=300")
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        getQuote();
    }, [])

    return (
        <div className="container">
            <h1 className="quote-title">Quote of the day</h1>
            <p className="quote-content">
                {loading ? "Loading..." : '"' + quote.content + '"'}
            </p>
            <div className="quote-author"> {loading ? "Loading..." : quote.author ?? "undefined"}</div>
            <div className="quote-action">
                <button style={{ cursor: loading ? "no-drop" : "pointer" }} onClick={handleNewQuote} id="btnNewQuote">New Quote</button>
                <button style={{ cursor: loading ? "no-drop" : "pointer" }} onClick={handleShareTweet} id="btnShareTweet">Tweet</button>
            </div>
        </div>
    )
}

export default Quote