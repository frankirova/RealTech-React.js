
import React from 'react'

const ItemListContainer = (props) => {
  return (
    <h1 className='m-3'>{props.greeting}<span className='text-edit'>{props.text}</span></h1>
  )
}

export default ItemListContainer