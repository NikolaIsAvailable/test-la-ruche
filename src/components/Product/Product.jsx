import React from 'react'
import { Link } from "react-router-dom";
import './product.css'

const Product = ({ product_name, image_front_small_url, product_id }) => {
  return (
    <li className='product'>
        <img src={image_front_small_url ?? 'https://images.assetsdelivery.com/compings_v2/pavelstasevich/pavelstasevich1811/pavelstasevich181101027.jpg'} alt={product_name} />
        <h2>{product_name ?? 'nom manquant'}</h2>
        <Link to={{pathname: `/product-details/${product_id}`}} target="_blank" rel="noopener noreferrer" >Voir Détails</Link>
    </li>
  )
}

export default Product