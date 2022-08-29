import React from 'react'
import CommaSeparatedList from '../CommaSeparatedList/CommaSeparatedList'
import './detailProductCard.css'

const DetailProductCard = ({ details }) => {
    const detailObj = details.product

    const formatAllergen = (allergen) => {
        const allergenByLanguage = allergen.split(':')
        let finalSentence = allergenByLanguage[0] === 'en' ? `${allergenByLanguage[1]} (anglais)` : `${allergenByLanguage[1]} (français)` 

        return finalSentence;
    }

    return (
        <div id='detail_product_card'>
            <div className='leftDetail'>
                <h2>{detailObj?.product_name}</h2>
                <img src={detailObj.image_front_url ?? 'https://images.assetsdelivery.com/compings_v2/pavelstasevich/pavelstasevich1811/pavelstasevich181101027.jpg'} alt={detailObj.product_name} />
            </div>
            <div className='rightDetail'>
                <div>
                    <h3>Ingrédients</h3>
                    <CommaSeparatedList list={detailObj.ingredients_text} />
                </div>
                <div>
                    <h3>Catégories</h3>
                    <CommaSeparatedList list={detailObj.categories} />
                </div>
                <div>
                    <h3>Allérgies</h3>
                    <ul>
                        {detailObj.allergens_hierarchy && detailObj.allergens_hierarchy.length > 0
                            ? detailObj.allergens_hierarchy.map((allergen, index) => {
                                return <li key={index}>{formatAllergen(allergen)}</li>
                            })
                            : 'Données manquantes'
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default DetailProductCard