import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap'



const SearchBox = () => {

    const [keyword, setKeyword] = useState('')

    return (
        <Form onSubmit={submitHandler} inline >
            <Form.Control type="text" name="q" onChange={(e) => setKeyword(e.target.value)}
            placeholder = "Search Products ..." className="mr-sm-2 ml-sm-5 ">
                <Button type="submit"  variant="outline-success" className="p-2"  >
                Search
                </Button>
            </Form.Control>
        </Form>
    )
}


export default SearchBox