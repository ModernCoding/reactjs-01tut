import { useState } from 'react'

import './App.sass'

import AddItem from './AddItem'
import Content from './Content'
import Footer from './Footer'
import Header from './Header'


const App = () => {

  const [ items, setItems ]
  
    = useState ((list => list ? JSON.parse (list) : []) (
      localStorage.getItem ('shoppingList')
    ))


  const [ newItem, setNewItem ] = useState ('')


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

      <Content
        items={ items }
        handleCheck={ handleCheck }
        handleDelete={ handleDelete }
      />
      
      <Footer length={ items.length } />
    
    </div>

  )

}


export default App