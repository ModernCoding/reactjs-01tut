import logo from './logo.svg'
import './App.css'


export default () => {

  const name = "Michel"

  const handleNameChange = () =>

    ((names, i) => names [ i ] ) (
      [ 'Bob', 'Kevin', 'Dave' ],
      Math.floor (Math.random () * 3)
    )


  return (

    <div className="App">

      <header className="App-header">

        <img src={ logo } className="App-logo" alt="logo" />

        <h1>{ name }</h1>

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <p>{ 2 * Math.sin (54 * Math.PI / 180) }</p>
        <p>{ handleNameChange () }</p>

      </header>

    </div>

  )

}