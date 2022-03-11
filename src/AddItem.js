import { FaPlus } from 'react-icons/fa'


const AddItem = () => {

  return (

    <form action="" className="addForm">

      <label htmlFor="addItem">Add item</label>

      <input
        type="text"
        id="addItem"
        autoFocus
        placeholder="Add Item"
        required
      />


      <button type="submit" aria-label="Add Item">
        <FaPlus />
      </button>

    </form>

  )

}


export default AddItem