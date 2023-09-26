import React from 'react'

const Items = (props) => {
  console.log(props)
  return (
    <>
      {props.items
      .filter(item => props.showOnlyStock ? item.stock > 0 : item )
      .filter(item => item.name.toLowerCase().includes(props.query))
      .map(item => (
        <tr key={item.id} onClick={() => alert(`${item.name} - ${item.price}`)}>
            <td>{item.name}</td>
            <td>{props.includePrice && `$${item.price}`}</td>
            <td style={{textAlign: "center"}}>{item.stock}</td>
        </tr>
      ))}
    </>
  )
}

export default Items