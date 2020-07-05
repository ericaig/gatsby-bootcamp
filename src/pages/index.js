import React from "react"
import { Link } from "gatsby"

const HomePage = () =>{
  return (
      <div>
          <h1>Home Page</h1>
          <p>Welcome to my awesome Gatsby page</p>
          <Link to="/blog">Goto BLOG page</Link><br/>
          <Link to="/about">Goto ABOUT page</Link><br/>
          <Link to="/contact">Goto CONTACT page</Link><br/>
      </div>
  )
}

export default HomePage