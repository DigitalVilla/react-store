import React from 'react'
import './ProductItem.scss'

export default function ProductItem(props) {
  return (
    <div className='product-item'>
      <div className='content'>
        <h3 className='name'>{props.name}</h3>
        <p className='legend'> {props.legend} </p>
      </div>
    </div>
  )
}
