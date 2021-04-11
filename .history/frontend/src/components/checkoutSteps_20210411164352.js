import React from 'react'
import {Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-bootstrap'



const CheckoutSteps = ({step1, step2, step3, step4}) => {
    return (
        <Nav className="justify-content-center mb-4">
            <Nav.Item>
                {step1 ? (
                    <LinkContainer to='/login'>
                        <Nav.Link>Sign In</Nav.Link>
                    </LinkContainer>
                ): <Nav.Link disabled > Sign  in </Nav.Link> }
            </Nav.Item>
        </Nav>
    )
}