import {useState} from 'react'
import "./CategoriesGroup.scss"

const CategoriesGroup = ({list}, sele) => {
    

  return (
    <div className='mainList'>
    All
    {list.map((x,y)=> {
    return <p key = {y}
    >{x}</p>
    })}
    </div>
  )
}

export default CategoriesGroup