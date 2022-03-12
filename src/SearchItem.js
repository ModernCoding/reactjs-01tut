const SearchItem = ({ newItem, setNewItem, handleSubmit }) => {

  return (

    <form
      className="searchForm"
      onSubmit={ e => e.preventDefault () }
    >

      <label htmlFor="search">Search</label>

      <input
        type="text"
        id="search"
        role="searchbox"
        placeholder="Search Item"
      />

    </form>

  )

}


export default SearchItem