import "./portfolioList.scss"

const PortfolioList = ({title, id, active, setSelected}) => {
  return (
    <li className={active ? "portfolioList active" : "portfolioList"} onClick={() => setSelected(id)}>
        {title}
    </li>
  )
}

export default PortfolioList