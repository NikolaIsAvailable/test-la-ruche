import React from 'react'
import './product.css'

const Product = ({ product_name, image_front_small_url, product_id }) => {
  console.log(image_front_small_url)
  return (
    <li className='product'>
        <img src={image_front_small_url ?? 'https://images.assetsdelivery.com/compings_v2/pavelstasevich/pavelstasevich1811/pavelstasevich181101027.jpg'} alt={product_name} />
        <h2>{product_name ?? 'nom manquant'}</h2>
        <a href={`https://world.openfoodfacts.org/api/v0/product/${product_id}.json?fields=product_name%2Ccategories%2Cimage_front_url%2Callergens_hierarchy%2Cingredients_text`}
           target="_blank"
           rel="noreferrer"
        >
          Voir Détails
        </a>
    </li>
  )
}

export default Product