import "./portfolioList.scss"

const PortfolioList = ({title, id, active, setSelected, setLoading}) => {
  const handleClick = () =>{
    setSelected(id); 
    setLoading(true);
  }

  return (
    <li className={active ? "portfolioList active" : "portfolioList"} onClick={() => handleClick()}>
        {title}
    </li>
  )
}

export default PortfolioList