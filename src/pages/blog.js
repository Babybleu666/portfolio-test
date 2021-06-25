import * as React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout"
import PostList from "../components/PostList"
import "./common.scss"

// markup
const BlogPage = (props) => {
  const posts = props.data.allMicrocmsPost.nodes
  return (
    <Layout>
      <Helmet>
        <title>blog | mmm's site</title>
        <meta
          name="description"
          content="mmmのブログです。"
        />
        <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0"></meta>
      </Helmet>
      <PostList posts={posts} />
    </Layout>
  )
}

export const query = graphql`
  query {
    allMicrocmsPost {
      nodes {
        slug
        title
        content
        publishedAt(formatString: "YYYY.MM.DD")
        category {
          slug
          name
        }
        thumbnail {
          url
        }
      }
    }
  }
`

export default BlogPage
