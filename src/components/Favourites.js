import Title from './ui/Title'
import { useState, useEffect } from 'react'
import Products from '../api/products.json'
import Product from './ui/Product'

export default function Favourites() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    setProducts(Products)
  }, [])

  return (
    <div className='container mx-auto'>
      <Title>Favoriler</Title>
       <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-9 gap-0 bg-white rounded-lg overflow-hidden'>
        {products.length && products.map((product, index) => <Product key={index} product={product} />)}
       </div>
    </div>
  )
}
