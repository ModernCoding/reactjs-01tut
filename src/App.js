import { useState } from 'react'

import './App.sass'

import AddItem from './AddItem'
import Content from './Content'
import Footer from './Footer'
import Header from './Header'
import SearchItem from './SearchItem'


const App = () => {

  const [ items, setItems ]

    = useState ((list => list ? JSON.parse (list) : []) (
      localStorage.getItem ('shoppingList')
    ))


  const [ newItem, setNewItem ] = useState ('')
  const [ search, setSearch ] = useState ('')


  const addItem = item => {

    (id =>

      (items => setAndSaveItems (items)) (
        [ ...items, { id, checked: false, item } ]
      )

    ) (items.length ? items [ items.length - 1 ].id + 1 : 1)

  }


  const handleCheck = id => {

    (listItems => setAndSaveItems (listItems)) (
      items.map (i => i.id === id ? { ...i, checked: !i.checked} : i)
    )

  }


  const handleDelete = id => {

    (listItems => setAndSaveItems (listItems)) (
      items.filter (i => i.id !== id)
    )

  }


  const handleSearch = search => {

  }


  const handleSubmit = e => {

    e.preventDefault ()
    
    if (!newItem) { return }

    addItem (newItem)
    setNewItem ('')

  }


  const setAndSaveItems = items => {
    setItems (items)
    localStorage.setItem ('shoppingList', JSON.stringify (items))
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


      <Content
        
        items={
          items.filter (i =>
            i.item.toLowerCase ().includes (search.toLowerCase ())
          )
        }
        
        handleCheck={ handleCheck }
        handleDelete={ handleDelete }

      />

      
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