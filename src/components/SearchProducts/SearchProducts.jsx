import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loader from '../Loader/Loader'
import Product from '../Product/Product'
import './searchProducts.css'

const SearchProducts = () => {
    const [searchBarValue, setSearchBarValue] = useState('')
    const [data, setData] = useState()
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    // Get and set data on searchBar input change
    useEffect(() => {
        if(searchBarValue.length !== 0) (async () => {
            try {
                setLoading(true)
                const response = await axios.get(`https://world.openfoodfacts.org/cgi/search.pl?search_terms=${searchBarValue}&search_simple=1&action=process&fields=id%2Cproduct_name%2Cimage_front_small_url&json=1&page=1&page_size=24`)
                setData(response.data)
                console.log(response.data)
            } catch(error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        })();
    }, [searchBarValue])

  return (
    <div id='search_products'>
        <div id='search_bar'>
            <input onChange={(e) => setSearchBarValue(e.target.value)} value={searchBarValue} type="text" id="search_products_field" placeholder='Chercher un produit'/>
            {error && 'erreur'}
            <div id='search_icon'>
                {loading ? <Loader /> : <i className="fa-solid fa-magnifying-glass"></i>}                
            </div>
        </div>
        <ul id='product_list'>
            {(data && searchBarValue.length > 0) && data.products.map((food, index) => {
                return <Product product_name={food.product_name} 
                                image_front_small_url={food.image_front_small_url}
                                product_id={food.id}
                                key={index}
                />
            })}
        </ul>
    </div>
  )
}

export default SearchProducts