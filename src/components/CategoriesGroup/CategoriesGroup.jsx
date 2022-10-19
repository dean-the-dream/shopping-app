import React from 'react'
import "./CategoriesGroup.scss"

const CategoriesGroup = ({list}) => {
    const newList = [...new Set(list)]
    console.log(list)
    console.log(newList)

  return (
    <div className='mainList'>
    All
    {newList.map((x,y)=> <p key = {y}>{x}</p>)}
    </div>
  )
}

export default CategoriesGroup