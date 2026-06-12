import { useEffect, useState } from "react";
import "./DarkTheme.css";

const DarkTheme = () => {
    const [theme, setTheme] = useState(() => {
        const themeStorage = localStorage.getItem("theme-storage");
        return themeStorage ?? "light";
    });

    const handleToggleTheme = () => {
        theme === "dark" ? setTheme("light") : setTheme("dark");
        // save localstorage theme
        localStorage.setItem("theme-storage", theme === "light" ? "dark" : "light");
    }

    useEffect(() => {
        if(theme === "dark") {
            document.body.classList.add("dark-theme");
        } else {
            document.body.classList.remove("dark-theme");
        }
    }, [theme])
    
    return (
        <>
            <header>
                <div className="container header">
                    <div className="header-logo">
                        <img src="assets/logo.png" alt="" width="80px" />
                    </div>
                    <nav>
                        <ul>
                            <li><a href="#">home</a></li>
                            <li><a href="#">about</a></li>
                            <li><a href="#">portfolio</a></li>
                            <li><a href="#">services</a></li>
                            <li><a href="#">hire me</a></li>
                            <li><img onClick={handleToggleTheme} id="toggleDarkMode" src={theme === "dark" ? "assets/sun.png" : "assets/moon.png"} alt="" width="30px" /></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <main>
                <section id="banner">
                    <div className="banner container">
                        <div className="banner-left">
                            <h1>I'm <span>Kate</span> Amelia</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Sequi eos obcaecati excepturi numquam explicabo voluptas ratione perspiciatis quo tempore et
                            </p>
                            <button>Download CV</button>
                            <div className="social-list">
                                <div className="social-item">
                                    <i className="fa-brands fa-facebook" />
                                </div>
                                <div className="social-item">
                                    <i className="fa-brands fa-instagram" />
                                </div>
                                <div className="social-item">
                                    <i className="fa-brands fa-facebook-messenger" />
                                </div>
                            </div>
                        </div>
                        <div className="banner-right">
                            <img src="assets/girl.png" />
                            <img src="assets/pattern.png" />
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default DarkTheme