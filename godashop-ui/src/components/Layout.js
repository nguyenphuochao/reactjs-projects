import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import BackToTop from './BackToTop'
import TopMenu from './TopMenu'

function Layout() {
    const [goToTop, setGoToTop] = useState(false);

    useEffect(() => {
        function handleScroll() {
            setGoToTop(window.scrollY > 200);
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    function handleBackToTop() {
        window.scrollTo(0, 0);
    }

    return (
        <>
            <TopMenu />
            
            <Header />

            <div className="container">
                <Outlet />
            </div>

            <BackToTop goToTop={goToTop} handleBackToTop={handleBackToTop} />

            <Footer />
        </>
    )
}

export default Layout
