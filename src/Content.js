import { useState } from 'react'
import { FaTrashAlt } from 'react-icons/fa'


const Content = () => {

  const [ items, setItems ] = useState ([{
  
        id: 1,
        checked: false,
        item: 'Item 1'
  
      }, {
  
        id: 2,
        checked: false,
        item: 'Item 2'
  
      }, {
  
        id: 3,
        checked: false,
        item: 'Item 3'
  
    }])


  const handleCheck = id => {

    (listItems => {
      setItems (listItems)
      localStorage.setItem ('shoppingList', JSON.stringify (listItems))
    }) (items.map (i => i.id === id ? { ...i, checked: !i.checked} : i))

  }


  const handleDelete = id => {

    (listItems => {
      setItems (listItems)
      localStorage.setItem ('shoppingList', JSON.stringify (listItems))
    }) (items.filter (i => i.id !== id))

  }


  return (

    <main>

      <ul>
        {
          items.map (item => (
            
            <li className="item" key={ item.id }>
              <input
                id={`item-${ item.id }`}
                type="checkbox"
                checked={ item.checked }
                onChange={ () => handleCheck (item.id) }
              />
              
              <label htmlFor={`item-${ item.id }`}>
                { item.item }
              </label>

              <FaTrashAlt
                role="button"
                tabIndex="0"
                onClick={ () => handleDelete (item.id) }
              />
            </li>  
          
          ))
        }
      </ul>
      
    </main>

  )

}


export default Content