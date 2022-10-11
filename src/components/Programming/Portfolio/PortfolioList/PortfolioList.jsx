import "./portfolioList.scss"

const PortfolioList = ({title, id, active, setSelected, setLoading, setProjectDisplay}) => {
  const handleClick = () =>{
    setSelected(id);
    setProjectDisplay(null); 
    setLoading(true);
  }

  return (
    <li className={active ? "portfolioList active" : "portfolioList"} onClick={() => handleClick()}>
        {title}
    </li>
  )
}

export default PortfolioList