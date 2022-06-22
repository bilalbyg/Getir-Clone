import { useEffect, useState } from 'react';
import categoriesData from '../api/categories.json'
import Category from './ui/Category';

export default function Categories() {

  const [categories, setCategories] = useState([]); // !!!!

  useEffect(() => {
    // API isteği
    setCategories(categoriesData)
  }, [])
  
  // 18. row
  return (
    <div className='bg-white py-4'>
      <div className='container mx-auto'>
        <h6 className='font-semibold text-sm text-gray-600 mb-3'>Kategoriler</h6>
        <div className='grid grid-cols-10'>
          {!categories.length && 'Yükleniyor...'}
          {categories && categories.map((category, index) => <Category key = {index} category={category} />)} 
        </div>
      </div>
    </div>
  )
}
