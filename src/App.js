import { useState } from 'react'

import './App.sass'

import AddItem from './AddItem'
import Content from './Content'
import Footer from './Footer'
import Header from './Header'


const App = () => {

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


  const [ newItem, setNewItem ] = useState ('')


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


  const handleSubmit = e => {

    e.preventDefault ()
    console.log (e.target)

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