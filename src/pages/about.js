import React from 'react'
import { Link } from 'gatsby'

const AboutPage = () =>{
    return (
        <div>
            <h1>About</h1>
            <p>About me page</p>
            <Link to="/contact">Goto CONTACT page</Link><br/>
        </div>
    )
}

export default AboutPage