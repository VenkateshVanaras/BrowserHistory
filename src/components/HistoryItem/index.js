import './index.css'

const HistoryItem = props => {
  const {historyList, deleteItem, inputClick} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyList
  const deleteItemCard = () => deleteItem(id)
  const addValue = () => inputClick(title)

  return (
    <li>
      <div className="listItem">
        <p>{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" />
        <p onClick={addValue}>{title}</p>
        <p>{domainUrl}</p>
      </div>
      <div>
        <button data-testid="delete" onClick={deleteItemCard} type="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default HistoryItem
