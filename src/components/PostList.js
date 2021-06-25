import React from "react"
import PostCell from "./PostCell"

import * as styles from "./PostList.module.scss"

const PostList = (props) => {
  return (
    <>
    <div className={styles.content}>
      <h2 className={styles.title}>Blog</h2>
      <div className={styles.blogContent}>
        <ul className={styles.blogList}>
          {props.posts.map(post => {
            return <li><PostCell post={post} key={post.title} /></li>
          })}
        </ul>
      </div>
    </div>
    </>
  )
}

export default PostList