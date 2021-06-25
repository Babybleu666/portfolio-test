import * as React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout"
import "./common.scss"
import * as styles from "../components/PostList.module.scss"

// markup
const WorkPage = (props) => {
  return (
    <Layout>
      <Helmet>
        <title>work | mmm's site</title>
        <meta
          name="description"
          content="shakexxmmmのポートフォリオです。"
        />
        <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0"></meta>
      </Helmet>
      <div className={styles.content}>
        <h2 className={styles.title}>Work</h2>
        <div className={styles.blogContent}>
          <p>製作中です</p>
        </div>
      </div>
    </Layout>
  )
}

export default WorkPage
