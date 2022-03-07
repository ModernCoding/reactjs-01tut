import { useState } from 'react'


const Content = () => {

  const [ name, setName ] = useState ('Dave')
  const [ count, setCount ] = useState (0)

  const handleCount = () => (i => setCount (++i)) (count)

  const handleNameChange = () => ((names, i) => setName (names [ i ])) (
      [ 'Bob', 'Kevin', 'Dave' ],
      Math.floor (Math.random () * 3)
    )


  return (

    <main>
      
      <p onClick={ handleCount }>
        Hello { name } - { count }
      </p>
      
      <button onClick={ handleNameChange }>Change Name</button>
    
    </main>

  )

}


export default Content