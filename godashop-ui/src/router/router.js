import React from 'react'
import { Routes, Route } from "react-router-dom";
import Layout from '../components/Layout';

import NoPage from '../pages/NoPage';
import Home from '../pages/Home';
import News from '../pages/News';
import Contact from '../pages/Contact';

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/news" element={<News />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NoPage />} />
            </Route>
        </Routes>
    )
}

export default Router
