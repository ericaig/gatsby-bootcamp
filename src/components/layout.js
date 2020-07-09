import React from 'react'
import Header from './header'
import Footer from './footer'
import '../styles/index.scss'
import layoutStyles from './layout.module.scss'

const Layout = ({ children: body }) => {
    return (
        <div className={layoutStyles.container}>
            <div className={layoutStyles.content}>
                <Header />
                {body}
            </div>
            <Footer />
        </div>
    )
}

export default Layout