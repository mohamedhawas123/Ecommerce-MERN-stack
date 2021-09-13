import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Carousel, Image} from 'react-bootstrap'
import Loader from './Loader'
import Message from './Message'
import { listtopProduct } from '../store/actions/productlist'
import { useDispatch, useSelector } from 'react-redux'

const ProductCarsouel = () => {

    const dispatch = useDispatch()

    const productTopRated = useSelector(state => state.Product)

    const {products, error, loading} = productTopRated

    useEffect(() => {

        dispatch(listtopProduct())
        

    },[dispatch])


    return loading ? <Loader />: error ? <Message variant="danger">{error}</Message>: (
        <Carousel pause="hover" className="bg-dark">
            {products.map( (product) => (
                <Carousel.Item key={product._id}>
                    <Link to={`/product/${product._id}`}>
                        <Image src={product.img} alt={product.name} fluid />
                        <Carousel.Caption className="carousel-caption">
                            <h2>{product.name} ({product.price}) </h2>
                        </Carousel.Caption>
                    </Link>
                </Carousel.Item>
            ) )}
        </Carousel>
    )
}