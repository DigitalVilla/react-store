import React from 'react'
import ProductItem from '../components/ProductItem/ProductItem'

export default function ProductMenu() {
  return (
    <div className='homepage'>
      <div className='product-menu'>
        <ProductItem name='hats' legend='Shop Now' />
        <ProductItem name='sneakers' legend='Shop Now' />
        <ProductItem name='jackets' legend='Shop Now' />
        <ProductItem name='women' legend='Shop Now' />
        <ProductItem name='men' legend='Shop Now' />
      </div>
    </div>
  )
}
