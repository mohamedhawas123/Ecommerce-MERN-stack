import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Form, Button} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import {UserDetail} from '../store/actions/user'
import FormContainer from '../components/formcontainer'


const UserEditScreen = ({match, history}) => {

    const userId = match.params.id

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [isAdmin, setIsAdmin] = useState(false)



    const dispatch = useDispatch()

    const userDetaill = useSelector(state => state.user)
    const {loading, userDetail, error} = userDetaill


    useEffect(() => {
       
            dispatch(UserDetail(userId))
        
        

    }, [userDetail])

    const submitHandler = (e) => {
        e.preventDefault()


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

export default UserEditScreen