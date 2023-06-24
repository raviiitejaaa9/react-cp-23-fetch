// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {itemData} = props
  const {id, author, avatarUrl, imageUrl, title, topic} = itemData

  return (
    <Link to={`/blogs/${id}`} className="blog-link">
      <li className="list-item-container">
        <img alt="profile" src={imageUrl} className="img-url" />
        <div className="item-details-container">
          <p> {topic} </p>
          <h1>{title}</h1>
          <div className="author-profile-container">
            <img
              alt="profile"
              className="author-profile-icon"
              src={avatarUrl}
            />
            <p> {author} </p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
