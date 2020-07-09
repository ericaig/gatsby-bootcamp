import React from 'react'
import Header from './header'
import Footer from './footer'
import '../styles/index.scss'

const Layout = ({ children: body }) => {
    return (
        <div>
            <Header />{body}<Footer />
        </div>
    )
}

export default Layout