import { FaTrashAlt } from 'react-icons/fa'


const LineItem = ({ item, handleCheck, handleDelete }) => {

  return (

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

  )

}


export default LineItem