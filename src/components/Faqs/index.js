// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  state = {activeIndexList: []}

  changeVisibility = id => {
    const {activeIndexList} = this.state
    if (activeIndexList.includes(id)) {
      this.setState(prevState => ({
        activeIndexList: prevState.activeIndexList.filter(each => each !== id),
      }))
    } else {
      this.setState(prevState => ({
        activeIndexList: [...prevState.activeIndexList, id],
      }))
    }
  }

  render() {
    const {activeIndexList} = this.state
    const {faqsList} = this.props
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="main-heading">FAQs</h1>
          <ul className="list-container">
            {faqsList.map(eachItem => (
              <FaqItem
                key={eachItem.id}
                activeIndexList={activeIndexList}
                faqItem={eachItem}
                changeVisibility={this.changeVisibility}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
