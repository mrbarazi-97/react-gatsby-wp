//import { Link } from "gatsby"
//import { navigate } from "gatsby-link"
import React from "react"
//import Header from "../components/Header"
//import Footer from "../components/Footer"
import Post from "../components/Post"
import PrimaryLayout from "../layouts/PrimaryLayouts"
import { graphql } from "gatsby"

export default ({ data }) => {
  console.log(data)
  return (
    <PrimaryLayout column="col-xs-6">
      {data.allMarkdownRemark.nodes.map(node => (
        <Post
          image={node.frontmatter.image}
          title={node.frontmatter.title}
          date={node.frontmatter.date}
          excerpt={node.excerpt}
          readmore={node.fields.slug}
        />
      ))}
    </PrimaryLayout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
          date
          keywords
          image
        }
        excerpt
        html
        fields {
          slug
        }
      }
    }
  }
`
