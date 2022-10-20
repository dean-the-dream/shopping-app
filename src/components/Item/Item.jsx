import React from 'react'
import './Item.scss'

const Item = ({details}) => {
  const {title, price, images:pic } = details
  return (
    <div className='card-div' style={{background: `url(${pic[2]})`, backgroundSize: "cover" }}>
      {/* <img src={} alt="" /> */}
      <div className='bottom'>
        {title}
        {price}
      </div>
      
    </div>
  )
}

export default Item