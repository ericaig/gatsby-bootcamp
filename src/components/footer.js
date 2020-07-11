import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Footer = () => {
    const data = useStaticQuery(graphql`
        query{
            site{
                siteMetadata{
                    author
                }
            }
        }
    `)
    return (
        <div>
            Made with <span role="img" aria-label="emoji">❤️</span> by <a href="https://github.com/ericaig" target="_blank" rel="noreferrer">{data.site.siteMetadata.author}</a> <span role="img" aria-label="emoji"></span> 2020
        </div>
    )
}

export default Footer