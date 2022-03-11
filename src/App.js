import { useState } from 'react'

import './App.sass'
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

    <div className="App">
    
      <Header />

      <Content
        items={ items }
        handleCheck={ handleCheck }
        handleDelete={ handleDelete }
      />
      
      <Footer />
    
    </div>

  )

}


export default App