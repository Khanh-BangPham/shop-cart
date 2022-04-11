import React from 'react'
import Promotion from '../../components/Promotion'
import TopBar from '../../components/TopBar'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
    return (
        <>
            <TopBar />
            <Header />
            <Promotion />
            <Outlet />
            <Footer />
        </>
    )
}
