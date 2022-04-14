import './portofolio.scss'
import PortfolioList from './PortofolioList/PortfolioList'
import { useState } from 'react'
import {
  projectsList, sectionsList
} from "../../data"
import { useEffect } from 'react'

const Portofolio = () => {
  const [selected, setSelected] = useState("0");
  const [data, setData] = useState([])
  const list = sectionsList;

  useEffect(() => {
    setData(projectsList.find((elem) => elem.id == selected).items)
  }, [selected])
  

  return (
    <div className='portofolio' id='portofolio'>
      <h1>Portofolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList title={item.title} id={item.id} active={selected === item.id} setSelected={setSelected} key={item.id}/>
        ))}
      </ul>
      <div className="container">
        {data.map((x) => (
          <div className="item" key={x.id}>
            <img src={x.img} alt="" />
            <h3>{x.title}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Portofolio