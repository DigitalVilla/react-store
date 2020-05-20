import React from 'react'
import './ProductItem.scss'

export default function ProductItem(props) {
  return (
    <li className={`product-item ${props.size}`}>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${props.imageUrl})`,
        }}
      ></div>
      <div className='content'>
        <h3 className='title'>{props.title}</h3>
        <p className='legend'> Shop Now </p>
      </div>
      <a href='/' className='link'></a>
    </li>
  )
}
