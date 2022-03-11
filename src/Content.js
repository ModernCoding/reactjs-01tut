import { FaTrashAlt } from 'react-icons/fa'


const Content = ({ items, handleCheck, handleDelete }) => {

  return (

    <main>

      { items.length ? (

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

        ) : (

          <strong>NO ITEM!</strong>

        ) 
        
      }
      
    </main>

  )

}


export default Content