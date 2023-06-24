// Write your JS code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'
import BlogItem from '../BlogItem'
// import UserInfo from '../UserInfo'

import './index.css'

class BlogList extends Component {
  state = {
    blogList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getBlogList()
  }

  getBlogList = async () => {
    const url = 'https://apis.ccbp.in/blogs'
    console.log(url)
    const response = await fetch(url)
    const data = await response.json()
    // console.log(data)
    const modifiedData = data.map(eachItem => ({
      id: eachItem.id,
      avatarUrl: eachItem.avatar_url,
      imageUrl: eachItem.image_url,
      title: eachItem.title,
      topic: eachItem.topic,
      author: eachItem.author,
    }))
    // console.log(modifiedData)
    this.setState({
      blogList: modifiedData,
      isLoading: false,
    })
  }

  render() {
    const {blogList, isLoading} = this.state

    return isLoading ? (
      <div data-testid="loader">
        <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
      </div>
    ) : (
      <ul className="blog-list-container">
        {blogList.map(eachItem => (
          <BlogItem key={eachItem.id} itemData={eachItem} />
        ))}
      </ul>
    )
  }
}

export default BlogList
