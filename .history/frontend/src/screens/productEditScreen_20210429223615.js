import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Form, Button} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import {productDetail, updateProduct} from '../store/actions/productlist'
import FormContainer from '../components/formcontainer'
import {PRODUCT_UPDATE_REST} from '../store/actions/actionTypes'
import axios from 'axios'




const ProductEditScreen = ({match, history}) => {

    const productId = match.params.id

    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [brand, setBrand] = useState('')
    const [image, setImage] = useState('')
    const [category, setCategory] = useState('')
    const [countInStock, setCountInStack] = useState(0)
    const [description, setDescriptopn] = useState('')
    const [uploading, setUploading] = useState(false)






    const dispatch = useDispatch()

    const userDetaill = useSelector(state => state.Product)
    const {loading, product, error} = userDetaill
    

    const userDetaille = useSelector(state => state.Product)
    const {loading:loadingUpdate, success, error:errorUpdate} = userDetaille


    

    useEffect(() => {

        if(success) {
            dispatch({type:PRODUCT_UPDATE_REST})
            history.push('/admin/productlist')
        }else {
            if(!product.name ) {
                dispatch(productDetail(productId))
     
            }else {
             setName(product.name)
             setPrice(product.price)
             setBrand(product.brand)
             setImage(product.image)
             setCategory(product.category)
             setCountInStack(product.countInStock)
             setDescriptopn(product.description)
     
            }
        }

      
       
        

    }, [product, dispatch ,history ,productId ,success ])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(updateProduct({
            _id:productId,
            name,
            price,
            image,
            brand,
            category,
            description,
            countInStock
        }))
        history.push('/admin/productlist')

 
    }


    return (

        <React.Fragment>
            <Link to='/admin/productlist'  className="btn btn-light my-3">Go Back</Link>
        
        
        <h1>Edit Product</h1>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
        {loading ? <Loader />: error ? <Message variant="danger">{error}</Message>:
        (
            <Form onSubmit={submitHandler}>

            <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                     type="name"
                      placeholder="Enter name"
                      value={name}
                    onChange={(e)=> setName(e.target.value) }>
    
                    </Form.Control>
                </Form.Group>
    
    
                <Form.Group controlId="price">
                    <Form.Label>Price </Form.Label>
                    <Form.Control
                     type="number"
                      placeholder="Enter price"
                      value={price}
                    onChange={(e)=> setPrice(e.target.value) }>
    
                    </Form.Control>
                </Form.Group>
    
                <Form.Group controlId="image">
                
                <Form.Label>Image  </Form.Label>
                    <Form.Control
                     type="text"
                      placeholder="Enter Image Url"
                      value={image}
                    onChange={(e)=> setImage(e.target.value) }>
    
                    </Form.Control>
                </Form.Group>


                <Form.Group controlId="brand">
                
                <Form.Label>Brand  </Form.Label>
                    <Form.Control
                     type="text"
                      placeholder="Enter brand "
                      value={brand}
                    onChange={(e)=> setBrand(e.target.value) }>
    
                    </Form.Control>
                </Form.Group>


                <Form.Group controlId="countInStack">
                
                <Form.Label>countInStack  </Form.Label>
                    <Form.Control
                     type="text"
                      placeholder="countInStock "
                      value={countInStock}
                    onChange={(e)=> setCountInStack(e.target.value) }>
    
                    </Form.Control>
                </Form.Group>


                <Form.Group controlId="price">
                
                <Form.Label>Price  </Form.Label>
                    <Form.Control
                     type="text"
                      placeholder="price "
                      value={price}
                    onChange={(e)=> setPrice(e.target.value) }>
    
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="category">
                
                <Form.Label>Category  </Form.Label>
                    <Form.Control
                     type="text"
                      placeholder="category "
                      value={category}
                    onChange={(e)=> setCategory(e.target.value) }>
    
                    </Form.Control>
                </Form.Group>


                <Form.Group controlId="descriptopn">
                
                <Form.Label>Descriptopn  </Form.Label>
                    <Form.Control
                     type="text"
                      placeholder="descriptopn "
                      value={description}
                    onChange={(e)=> setDescriptopn(e.target.value) }>
    
                    </Form.Control>
                </Form.Group>
                
                <Button type="submit" variant="primary">
                    Update
                </Button>
    
    
            </Form>
    
        )
        }
       

       <FormContainer/>
        </React.Fragment>
       
       
            

    )
}

export default ProductEditScreen