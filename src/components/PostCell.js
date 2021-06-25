import React from "react"
import { Link } from "gatsby"

import * as styles from "./PostCell.module.scss"

const PostCell = (props) => {
  const { title, content, category, publishedAt, slug, thumbnail } = props.post;
  return (
    <Link to={`/blog/${slug}`} className={styles.card}>
      <div className={styles.card__image} style={{backgroundImage: 'url(' + thumbnail?.url + ')'}}>
      </div>
      <div className={styles.card__content}>
        <h3 className={styles.card__content__title}>{title}</h3>
        <p className={styles.card__content__category}>#{category.name}</p>
        <time className={styles.card__content__date}>{publishedAt}</time>
      </div>
    </Link>
  )
}

export default PostCell