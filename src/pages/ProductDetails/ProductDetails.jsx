import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import DetailProductCard from '../../components/DetailProductCard/DetailProductCard'
import Error from '../../components/Error/Error'
import Header from '../../components/Header/Header'
import SkeletonLoader from '../../components/SkeletonLoader/SkeletonLoader'

const ProductDetails = () => {
    const { id } = useParams()
    const [data, setData] = useState()
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if(id.length !== 0) (async () => {
            try {
                setLoading(true)
                const response = await axios.get(`https://world.openfoodfacts.org/api/v0/product/${id}.json?fields=product_name%2Ccategories%2Cimage_front_url%2Callergens_hierarchy%2Cingredients_text`)
                setData(response.data)
            } catch(error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        })();
    }, [id])

  return (
    <>
        <Header />
        {error && <Error />}
        { !loading && data ? <DetailProductCard details={data} /> : <SkeletonLoader />}
    </>    
  )
}

export default ProductDetails