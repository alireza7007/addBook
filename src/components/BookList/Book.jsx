import React from 'react'

export default function Book(props) {
    
  return (
    <tr>
                <th>{props.title}</th>
                <th>{props.auther}</th>
                <th>{props.year}</th>
                <th><button onClick={props.onRemove}>remove</button></th>
            </tr>
  )
}
