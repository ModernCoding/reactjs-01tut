import ItemList from './ItemList'


const Content = ({ items, handleCheck, handleDelete }) => {

  return (

    <main>

      { items.length ? (

          <ItemList
            items={ items }
            handleCheck={ handleCheck }
            handleDelete={ handleDelete }
          />

        ) : (

          <strong>NO ITEM!</strong>

        ) 
        
      }
      
    </main>

  )

}


export default Content