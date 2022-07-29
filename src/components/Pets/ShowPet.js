
import { useState, useEffect } from 'react'

// this will allow us to see our parameters
import { useParams, useNavigate } from 'react-router-dom'
// useNavigate will allow us to navigate to a specific page

import { Container, Card } from 'react-bootstrap'

import LoadingScreen from '../shared/LoadingScreen'
import { getOnePet } from '../../api/pets'
import messages from '../shared/AutoDismissAlert/messages'

// We need to get the pet's id from the parameters
// Then we need to make a request to the api
// Then we need to display the results in this component


const ShowPet = (props) => {
    const [pet, setPet] = useState(null)

    // destructuring to get the id value from our route parameters
    const { id } = useParams()
    const navigate = useNavigate()
    // useNavigate returns a function
    // we can call that function to redirect the user wherever we want to

    const { msgAlert } = props

    useEffect(() => {
        getOnePet(id)
            .then(res => setPet(res.data.pet))
            .catch(err => {
                navigate('/')
                // navigate back to home page if there's an error fetching
                msgAlert({
                    heading: 'Error getting pet',
                    message: messages.getPetsFailure,
                    variant: 'danger'
                })
            })
    }, [])

    if(!pet) {
        return <LoadingScreen />
    }

    return (
        <Container className='fluid'>
            <Card>
                <Card.Header>
                    { pet.fullTitle }
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        <div>Age: { pet.age }</div>
                        <div>Type: { pet.type }</div>
                        <div>Adoptable: { pet.adoptable ? 'yes' : 'no' }</div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default ShowPet