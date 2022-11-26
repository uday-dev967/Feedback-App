import {Component} from 'react'
import './index.css'

const Emoji = props => {
  const {item, onResponse} = props
  const {name, imageUrl} = item
  const emojiClicked = () => {
    onResponse()
  }
  return (
    <li className="list-item" onClick={emojiClicked}>
      <img src={imageUrl} alt={name} className="image" />
      <p className="tag">{name}</p>
    </li>
  )
}

class Feedback extends Component {
  state = {respond: false}

  onResponse = () => {
    this.setState(prevState => ({respond: !prevState.respond}))
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const {respond} = this.state
    if (respond) {
      return (
        <div className="main-container">
          <div className="love-card-container">
            <img src={loveEmojiUrl} alt="love emoji" className="image" />
            <h1 className="heading">Thank you!</h1>
            <p className="tag">
              We will use your feedback to improve our customer support
              performance
            </p>
          </div>
        </div>
      )
    }
    return (
      <div className="main-container">
        <div className="card-container">
          <h1 className="heading">
            How satisfied are you with our customer support performance
          </h1>
          <ul className="emoji-container">
            {emojis.map(each => (
              <Emoji item={each} onResponse={this.onResponse} key={each.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Feedback
