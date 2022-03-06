export default () => {

  const randomName = ((names, i) => names [ i ] ) (
      [ 'Bob', 'Kevin', 'Dave' ],
      Math.floor (Math.random () * 3)
    )


  return (

    <main>
      <p>{ randomName }</p>
    </main>

  )

}