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
    const [isAdmin, setIsAdmin] = useState(False)



    const dispatch = useDispatch()

    const userDetail = useSelector(state => state.user)
    const {loading, userInfo, error} = userDetail


    useEffect(() => {
        
    }, [])

    const submitHandler = (e) => {
        e.preventDefault()


    }


    return (

       
        <div>
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
    
                <Form.Group controlId="password">
                    <Form.Label>password</Form.Label>
                    <Form.Control
                     type="password"
                      placeholder="Enter password"
                      value={password}
                    onChange={(e)=> setPassword(e.target.value) }>
    
                    </Form.Control>
                </Form.Group>
    
                <Button type="submit" variant="primary">
                    Update
                </Button>
    
    
            </Form>
    
        )
        }
       

        </FormContainer>

</div>
    )
}

export default UserEditScreen