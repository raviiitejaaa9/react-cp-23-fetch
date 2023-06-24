// Write your JS code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import './index.css'

class BlogItemDetails extends Component {
  state = {
    blogItemDetails: {},
    isLoading: true,
  }

  componentDidMount() {
    this.getItemDetails()
  }

  getItemDetails = async () => {
    // console.log(this.props)
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)

    const newUrl = `https://apis.ccbp.in/blogs/${id}`
    console.log(newUrl)
    const response1 = await fetch(newUrl)
    const data1 = await response1.json()
    console.log(data1)
    const modifiedData = {
      id: data1.id,
      avatarUrl: data1.avatar_url,
      imageUrl: data1.image_url,
      author: data1.author,
      title: data1.title,
      topic: data1.topic,
      content: data1.content,
    }

    console.log(modifiedData)

    this.setState({
      blogItemDetails: modifiedData,
      isLoading: false,
    })
  }

  render() {
    const {blogItemDetails, isLoading} = this.state
    const {
      id,
      author,
      avatarUrl,
      title,
      topic,
      content,
      imageUrl,
    } = blogItemDetails

    return isLoading ? (
      <div data-testid="loader">
        <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
      </div>
    ) : (
      <div className="details-container">
        <h1 className="title"> {title} </h1>
        <div className="author-profile-container">
          <img alt="profile" src={avatarUrl} className="author-profile-icon" />
          <p> {author} </p>
        </div>
        <img alt={title} src={imageUrl} className="img-url" />
        <p> {content} </p>
      </div>
    )
  }
}

export default BlogItemDetails
