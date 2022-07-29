
import { useState } from 'react'

// this will allow us to see our parameters
import { useParams } from 'react-router-dom'

import LoadingScreen from '../shared/LoadingScreen'

// We need to get the pet's id from the parameters
// Then we need to make a request to the api
// Then we need to display the results in this component


const ShowPet = (props) => {
    const [pet, setPet] = useState(null)

    // destructuring to get the id value from our route parameters
    const { id } = useParams()

    if(!pet) {
        return <LoadingScreen />
    }

    return <p>This is the show pet component for {id}</p>
}

export default ShowPet