import { useState, useEffect } from 'react'

import './App.sass'

import AddItem from './AddItem'
import Content from './Content'
import Footer from './Footer'
import Header from './Header'
import SearchItem from './SearchItem'

import apiRequest from './apiRequest'


const App = () => {

  const API_URL = 'http://localhost:3500/items'

  // const [ items, setItems ]

  //   = useState ((list => list ? JSON.parse (list) : []) (
  //     localStorage.getItem ('shoppingList')
  //   ))


  const [ items, setItems ] = useState ([])
  const [ newItem, setNewItem ] = useState ('')
  const [ search, setSearch ] = useState ('')
  const [ fetchError, setFetchError ] = useState (null)
  const [ isLoading, setIsLoading ] = useState (true)

  useEffect (() => {

    // localStorage.setItem ('shoppingList', JSON.stringify (items))
  
    (async () => {
      
      try {
        
        const response = await fetch (API_URL)

        if (!response.ok) {
          throw Error ('Did not receive expected data')
        }

        setItems (await response.json ())
        setFetchError (null)
      
      }


      catch (error) {
        setFetchError (error.message)
      }

      finally {
        setIsLoading (false)
      }

    }) ()

  }, [])


  const addItem = item => {

    (id =>

      (newItem =>

        (async (items) => {

          setItems (items)


          const result = await apiRequest (API_URL, {
            
            method: 'post',
            
            headers: {
              'Content-Type': 'application/json'
            },

            body: JSON.stringify (newItem)
          
          })


          if (result) setFetchError (result)

        }) ([ ...items, newItem ])

      ) ({ id, checked: false, item })

    ) (items.length ? items [ items.length - 1 ].id + 1 : 1)

  }


  const handleCheck = id => {

    (listItems => setItems (listItems)) (
      items.map (i => i.id === id ? { ...i, checked: !i.checked} : i)
    )

  }


  const handleDelete = id => {

    (listItems => setItems (listItems)) (
      items.filter (i => i.id !== id)
    )

  }


  const handleSubmit = e => {

    e.preventDefault ()
    
    if (!newItem) { return }

    addItem (newItem)
    setNewItem ('')

  }


  return (

    <div className="App">
    
      <Header />

      <AddItem
        newItem={ newItem }
        setNewItem={ setNewItem }
        handleSubmit={ handleSubmit }
      />

      <SearchItem
        search={ search }
        setSearch={ setSearch }
      />


      <main>

        { isLoading && <p>Loading...</p>}

        {
          fetchError ? (

              <p>{`Error: ${ fetchError }`}</p>

            ) : (

              !isLoading && <Content
                
                items={
                  items.filter (i =>
                    i
                      .item
                      .toLowerCase ()
                      .includes (search.toLowerCase ())
                  )
                }
                
                handleCheck={ handleCheck }
                handleDelete={ handleDelete }

              />

            )
        }

      </main>

      
      <Footer
        length={
          items.filter (i =>
            i.item.toLowerCase ().includes (search.toLowerCase ())
          ).length
        } 
      />
    
    </div>

  )

}


export default App