import React from 'react'
import './product.css'

const Product = ({ product_name, image_front_small_url, product_id }) => {
  return (
    <li className='product'>
        <h2>{product_name}</h2>
        <img src={image_front_small_url} alt={product_name} />
        <a href={`https://world.openfoodfacts.org/api/v0/product/${product_id}.json?fields=product_name%2Ccategories%2Cimage_front_url%2Callergens_hierarchy%2Cingredients_text`}
           target="_blank"
        >
            Voir Détails

        </a>
    </li>
  )
}

export default Product