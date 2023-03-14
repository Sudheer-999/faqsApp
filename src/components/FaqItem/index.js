import './index.css'
import {Component} from 'react'

class FaqItem extends Component {
  state = {isClicked: false}

  toggleActiveItem = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  renderAnswerText = () => {
    const {isClicked} = this.state
    const {details} = this.props
    const {answerText} = details

    if (isClicked) {
      return (
        <div>
          <hr className="line" />
          <p className="answer-text">{answerText}</p>
        </div>
      )
    }
    return null
  }

  renderQuestionText = () => {
    const {details} = this.props
    const {questionText} = details
    const {isClicked} = this.state

    const plusMinusImg = isClicked
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const altText = isClicked ? 'minus' : 'plus'

    return (
      <div className="question-con">
        <h1 className="question-text">{questionText}</h1>
        <button type="button" className="btn" onClick={this.toggleActiveItem}>
          <img src={plusMinusImg} alt={altText} />
        </button>
      </div>
    )
  }

  render() {
    return (
      <li className="faq-item">
        {this.renderQuestionText()}
        {this.renderAnswerText()}
      </li>
    )
  }
}

export default FaqItem
