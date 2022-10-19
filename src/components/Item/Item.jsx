import React from 'react'
import './Item.scss'

const Item = ({details}) => {
  console.log(details, "from item")
  const {title, price, images:pic } = details
  console.log(pic[2])
  return (
    <div className='card-div' style={{background: `url(${pic[2]})`, backgroundSize: "cover" }}>
      {/* <img src={} alt="" /> */}
      <div classname='bottom'>
        {title}
        {price}
      </div>
      
    </div>
  )
}

export default Item