import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider';

function Product({id, title, image, price, rating}) {
    const [, dispatch] = useStateValue();
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                // in es6 if key name  = value you can just write key for eg below (id instead of id: id)
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
    }

  return (
    <div className='product'>
        <div className='product__info'>
        <p>{title}</p>
        <p className='product__price'>
            <small>₹ </small>
            <strong>{price}</strong>
        </p>
        <div className='product__rating'>
            {
                Array(rating)
                .fill()
                .map((_, index) => (
                    <p key={index}>⭐</p>
                ))
            }
        </div>
        </div>
        <img src={image} alt="Phone" />
        <button onClick={addToBasket}>Add to cart</button>
    </div>
  )
}

export default Product