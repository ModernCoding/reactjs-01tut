const Content = () => {

  const randomName = ((names, i) => names [ i ] ) (
      [ 'Bob', 'Kevin', 'Dave' ],
      Math.floor (Math.random () * 3)
    )


  const handleClick = e => console.log (e.target)


  return (

    <main>
      <p>{ randomName }</p>
      <button onClick={ e => handleClick (e) }>Click it</button>
    </main>

  )

}


export default Content