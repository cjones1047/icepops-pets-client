import apiUrl from '../apiConfig'
import axios from 'axios'

export const getAllPets = () => {
    return axios(`${apiUrl}/pets`)
}

export const getOnePet = (id) => {
    return axios(`${apiUrl}/pets/${id}`)
}

export const createPet = (user, newPet) => {
    // inour createPet form, we're building an object
    // when we pass that object into the api createPet function
    // it's going to look like the pets in our database
    // we're going to refer to this as a newPet, so we can just pass the entire object created by the form into an Axios request to our back-end (Pets API) and call it 'pet'
    console.log('this is user', user)
    console.log('this is newPet', newPet)
	// return axios({
	// 	url: apiUrl + '/pets',
	// 	method: 'POST',
	// 	headers: {
	// 		Authorization: `Token token=${user.token}`,
	// 	},
	// 	data: {
	// 		pet: newPet,
	// 	},
	// })
}