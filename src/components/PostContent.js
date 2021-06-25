import React from "react"
import { Link } from "gatsby"
// import * as styles from "./PostList.module.scss"
import * as styles from "./PostContent.module.scss"

const PostCell = (props) => {
  const { title, content, category, publishedAt, slug, thumbnail } = props.post;
  return (
    <div className={styles.content}>
      <h2 className={styles.title}>Blog</h2>
      <article className={styles.article}>
        <h3 className={styles.article__title}>{ title }</h3>
        <div className={styles.article__flex}>
          <p className={styles.article__category}>#{ category.name }</p>
          <date className={styles.article__date}>{ publishedAt }</date>
        </div>
        <p className={styles.article__thumbnail}>
          <img src={thumbnail?.url} alt={title} />
        </p>
        <div className={styles.article__text} dangerouslySetInnerHTML={{ __html: content }}></div>
      </article>
    </div>
  )
}

export default PostCell