import React from 'react'
import Layout from '../components/layout'
import { useStaticQuery, graphql } from 'gatsby'

const BlogPage = () => {
    const { allMarkdownRemark: { edges: posts } } = useStaticQuery(graphql`
    query{
        allMarkdownRemark{
            edges{
                node{
                    frontmatter{
                        title
                        date
                    }
                    html
                    excerpt
                }
            }
        }
    }`)
    return (
        <div>
            <Layout>
                <h1>Blog</h1>
                <ol>
                    {posts.map((post, index) =>
                        <li key={index}>
                            <h4>{post.node.frontmatter.title}</h4>
                            <span>{post.node.frontmatter.date}</span>
                            <p>{post.node.html}</p>
                        </li>
                    )}
                </ol>
            </Layout>
        </div>
    )
}

export default BlogPage