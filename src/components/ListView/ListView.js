import React from 'react'
import PropTypes from 'prop-types'

const ListView = props => (
  <ul>
    {props.items &&
      props.items.map(item => (
        <li key={item.id}>
          {item[props.mainProperty]}
          <button onClick={props.deleteHandler(item.id)}>Delete</button>
        </li>
      ))}
  </ul>
)

ListView.propTypes = {
  items: PropTypes.array.isRequired,
  mainProperty: PropTypes.string.isRequired,
  deleteHandler: PropTypes.func.isRequired
}

export default ListView
