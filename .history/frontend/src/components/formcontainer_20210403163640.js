import React from 'react'
import {Form, Container  ,Button, Row, Col} from 'react-bootstrap'



const FormContainer = () => {

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col xs={12} md={6}>
                    {children}
                </Col>
            </Row>
        </Container>
    )
}