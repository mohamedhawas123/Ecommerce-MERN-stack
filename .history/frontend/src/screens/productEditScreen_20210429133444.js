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

       }
       
        

    }, [dispatch, history ,userId ,userDetail, success ])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(updateUser({
            _id:userId,
            name,email,isAdmin
        }))

 
    }


    return (

        <React.Fragment>
            <Link to='/admin/userlist'  className="btn btn-light my-3">Go Back</Link>
        
        
        <h1>Edit User</h1>
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
    
    
                <Form.Group controlId="email">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                     type="email"
                      placeholder="Enter email"
                      value={email}
                    onChange={(e)=> setEmail(e.target.value) }>
    
                    </Form.Control>
                </Form.Group>
    
                <Form.Group controlId="isadmin">
                
                    <Form.Check
                     type="checkbox"
                      lable="Is Admin"
                      
                      checked={isAdmin}
                    onChange={(e)=> setIsAdmin(e.target.checked) }>
    
                    </Form.Check>
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