import React, { useState } from 'react'
import { Container, Button, Form, Col, Row } from 'react-bootstrap'

const ToyForm = (props) => {
    const {toy, handleChange, handleSubmit, heading} = props

    return (
        <Container className='justify-content-center'>
            <h3>{heading}</h3>
            <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>Name</Form.Label>
                        <Form.Control 
                            placeholder="What is the toy's name?"
                            value={ toy.name }
                            name='name'
                            type='text'
                            onChange={ handleChange } />
                            
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label>Type</Form.Label>
                        <Form.Select
                            aria-label='toy condition'
                            name='condition'
                            defaultValue={toy.condition}
                            onChange={ handleChange }>
                            <option>Open select menu</option>
                            <option value='new'>new</option>
                            <option value='used'>used</option>
                            <option value='disgusting'>disgusting</option>
                        </Form.Select>
                    </Form.Group>

                    
                </Row>

                <Row className='mb-3'>
                    <Form.Group as={Col}>
                        <Form.Label>Description</Form.Label>
                        <Form.Control 
                            placeholder="What kind of toy is this?"
                            value={ toy.description }
                            name="description"
                            type="text"
                            onChange={ handleChange } />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    
                    <Form.Group as={Col}>
                        <Form.Check name='isSqueaky' type="checkbox" defaultChecked={ toy.isSqueaky }label="Is it squeaky?" 
                        onChange={ handleChange }/>
                    </Form.Group>
                </Row>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

export default ToyForm