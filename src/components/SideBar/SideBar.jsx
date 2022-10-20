import React from 'react'
import "./SideBar.scss"

const SideBar = () => {
  return (
    <div className='side-bar'>
      <div>
        <input type="text" placeholder='Item Name' />
        <button>Search</button>
      </div>
      <div className="price-search">
        <h3>Price</h3>
        <input type="number" className='upper' />
        <input type="number" className='lower' />
      </div>
    </div>
  )
}

export default SideBar