// Write your code here.
import './index.css'

const FaqItem = props => {
  const {faqItem, activeIndexList, changeVisibility} = props
  const {questionText, answerText, id} = faqItem
  const imgUrl = activeIndexList.includes(id)
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
  const imgAlt = activeIndexList.includes(id) ? 'minus' : 'plus'

  const changeActiveId = () => {
    changeVisibility(id)
  }

  return (
    <li className="list-item">
      <div className="question">
        <h1 className="list-head">{questionText}</h1>
        <button type="button" className="btn" onClick={changeActiveId}>
          <img src={imgUrl} alt={imgAlt} className="img" />
        </button>
      </div>
      {activeIndexList.includes(id) && <hr />}
      {activeIndexList.includes(id) && (
        <p className="list-para">{answerText}</p>
      )}
    </li>
  )
}

export default FaqItem
