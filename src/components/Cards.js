import { useState, useEffect } from 'react';
import cardData from '../api/cards.json'

export default function Cards() {
  
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(cardData)
  }, [])
  
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-0 md:mt-10">
      {cards.length && cards.map(card =>(
        <div className='bg-white rounded-lg shadow-lg flex flex-col gap-y-2 items-center text-center p-14'>
          <img src={card.image} />
          <h6 className='text-primary-brand-color text-lg font-semibold'>{card.title}</h6>
          <p className='text-lg text-gray-500'>{card.description}</p>
        </div>
      ))}
    </div>
  )
}
