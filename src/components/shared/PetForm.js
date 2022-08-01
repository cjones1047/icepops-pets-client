import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap'


const PetForm = (props) => {
    const { pet, handleChange, heading, handleSubmit } = props
    return (
      <>
        <Container className='justify-content-center'>
            <h3>{heading}</h3>
            <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>Name</Form.Label>
                        <Form.Control 
                            placeholder="Enter pet's name here"
                            value={ pet.name }
                            name='name'
                            type='text'
                            onChange={ handleChange } />
                            
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label>Age</Form.Label>
                        <Form.Control 
                            placeholder="Enter pet's age"
                            value={ pet.age }
                            name="age"
                            type="number"
                            min="1"
                            onChange={ handleChange } />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>Type</Form.Label>
                        <Form.Control 
                            placeholder="Enter pet's type here"
                            value={ pet.type }
                            name='type'
                            type='text' 
                            onChange={ handleChange }/>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Check name='adoptable' type="checkbox" defaultChecked={ pet.adoptable }label="Adoptable?" 
                        onChange={ handleChange }/>
                    </Form.Group>
                </Row>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
      </>
    );
}

export default PetForm