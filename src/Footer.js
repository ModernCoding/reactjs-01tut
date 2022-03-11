const Footer = ({ length }) => (is =>

  is &&= (

    <footer>
      <p>{ length } { length > 1 ? 'items' : 'item' }</p>
    </footer>

  )

) (length > 0)

export default Footer