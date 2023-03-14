import {Component} from 'react'
import FaqItem from '../FaqItem/index'
import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props

    return (
      <div className="bg-container">
        <div className="faq-container">
          <h1 className="main-head">FAQs</h1>
          <ul className="faqs-list">
            {faqsList.map(eachItem => (
              <FaqItem details={eachItem} key={eachItem.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
