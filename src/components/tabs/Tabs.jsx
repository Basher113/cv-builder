import "./tabs.css"
const Tabs = ({tabs, activeTab, onChangeActiveTab}) => {
  
  return (
    <div className="tabs">
      {tabs.map(tab => (
        <button type="button" onClick={() => onChangeActiveTab(tab.id)} className={activeTab === tab.id && "active"} key={tab.id}>{tab.text}</button>
      ))}
    </div>
  )
}

export default Tabs