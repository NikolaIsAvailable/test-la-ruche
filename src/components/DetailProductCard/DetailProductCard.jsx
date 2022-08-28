import React from 'react'
import './detailProductCard.css'

const DetailProductCard = ({ details }) => {
    const detailObj = details.product
    console.log(detailObj)
  return (
    <div id='detail_product_card'>
        <h2>{detailObj.product_name}</h2>
        <img src={detailObj.image_front_url ?? 'https://images.assetsdelivery.com/compings_v2/pavelstasevich/pavelstasevich1811/pavelstasevich181101027.jpg'} alt={detailObj.product_name} />
        <p>{detailObj.ingredients_text}</p>
        <p>{detailObj.categories}</p>
        <ul>
            {detailObj.allergens_hierarchy.map((allergen) => {
                return <li>{allergen}</li>
            })}
        </ul>
    </div>
  )
}

export default DetailProductCard