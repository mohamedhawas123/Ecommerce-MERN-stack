import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Form, Button} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import {productDetail} from '../store/actions/productlist'
import FormContainer from '../components/formcontainer'
 
const ProductEditScreen = ({match, history}) => {

    const productId = match.params.id

    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [brand, setBrand] = useState('')
    const [image, setImage] = useState('')
    const [category, setCategory] = useState('')
    const [countInStack, setCountInStack] = useState(0)
    const [descriptopn, setDescriptopn] = useState('')





    const dispatch = useDispatch()

    const userDetaill = useSelector(state => state.Product)
    const {loading, product, error} = userDetaill


    

    useEffect(() => {

       if(!product.name || product._id==productId) {
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
       
        

    }, [dispatch, history ,productId ,productDetail ])

    const submitHandler = (e) => {
        e.preventDefault()
        // update product

 
    }


    return (

        <React.Fragment>
            <Link to='/admin/productlist'  className="btn btn-light my-3">Go Back</Link>
        
        
        <h1>Edit Product</h1>
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
                
                <Form.Label>brand  </Form.Label>
                    <Form.Control
                     type="text"
                      placeholder="Enter brand Url"
                      value={brand}
                    onChange={(e)=> setBrand(e.target.value) }>
    
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