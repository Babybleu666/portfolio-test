import * as React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout"
import Profile from "../components/Profile"
import "./common.scss"

// markup
const IndexPage = (props) => {
  return (
    <Layout>
      <Helmet>
        <title>shakexxmmm's site</title>
        <meta
          name="description"
          content="shakexxmmmのポートフォリオサイトです。"
        />
        <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0"></meta>
      </Helmet>
      <Profile />
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

export default IndexPage
