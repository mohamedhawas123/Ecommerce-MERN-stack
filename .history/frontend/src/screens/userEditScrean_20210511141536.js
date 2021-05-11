import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Form, Button} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import {UserDetail, updateUser} from '../store/actions/user'
import FormContainer from '../components/formcontainer'
import {USER_UPDATE_ADMIN_REST} from '../store/actions/actionTypes'

const UserEditScreen = ({match, history}) => {

    const userId = match.params.id

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [isAdmin, setIsAdmin] = useState(false)



    const dispatch = useDispatch()

    const userDetaill = useSelector(state => state.user)
    const {loading, userDetail, error} = userDetaill


    const userUpdate = useSelector(state => state.user)
    const {loading:loadingUpdate, error:errorUpdate, success} = userUpdate

    useEffect(() => {

        if(success) {
            dispatch({type:USER_UPDATE_ADMIN_REST })
            history.push('/admin/userlist')
        }else {
            if(!userDetail.name ||userDetail._id !== userId) {
                dispatch(UserDetail(userId))
            }else {
                setName(userDetail.name)
                setEmail(userDetail.email)
                setIsAdmin(userDetail.isAdmin)
            }
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
            <Form.Group controlId='name'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='name'
                placeholder='Enter name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='email'>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='isadmin'>
              <Form.Check
                type='checkbox'
                label='Is Admin'
                checked={isAdmin}
                onChange={(e) => setIsAdmin(e.target.checked)}
              ></Form.Check>
            </Form.Group>

            <Button type='submit' variant='primary'>
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