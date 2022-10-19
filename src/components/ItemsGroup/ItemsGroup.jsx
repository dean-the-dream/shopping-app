import './ItemsGroup.scss'
import Item from '../Item/Item'

const ItemsGroup = ({items}) => {
  console.log(items, "<<<<from items group")
  return (
    <div className='items-group'>
    {items.map((x) => {
    return <Item key={x.id} 
    details={x}/>})}
    </div>
    
    
  )
}

export default ItemsGroup