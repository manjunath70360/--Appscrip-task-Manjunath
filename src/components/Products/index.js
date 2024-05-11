import './index.css'
import React, { useState, useEffect } from 'react';

import { GrFavorite } from "react-icons/gr";



const Products = () =>{

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        setProducts(json); 
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);
    return(
        <div className='product-section'>
            <h2 className='side-head'>NEW PRODUCT</h2>
            <ul className='product-container'>
                {productList.map(eachItem =>(
                    <li className='card'>
                        <img src={eachItem.image} className='product-img' alt='product-img' />
                        <div className='product-text'>
                            <h3 className='product-name'>{eachItem.title}</h3>
                            <div className='fav-text'>
                            <p className='description'><span className='signin'>Sign in</span> or Create an account to see pricing</p>
                            <GrFavorite />
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            
        </div>
    )
}

export default Products
