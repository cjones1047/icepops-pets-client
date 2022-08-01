import apiUrl from '../apiConfig'
import axios from 'axios'

// INDEX
export const getAllPets = () => {
    return axios(`${apiUrl}/pets`)
}

// SHOW
export const getOnePet = (id) => {
    return axios(`${apiUrl}/pets/${id}`)
}

// CREATE
export const createPet = (user, newPet) => {
    console.log('createPet in API was hit')
    // inour createPet form, we're building an object
    // when we pass that object into the api createPet function
    // it's going to look like the pets in our database
    // we're going to refer to this as a newPet, so we can just pass the entire object created by the form into an Axios request to our back-end (Pets API) and call it 'pet'
    // console.log('this is user', user)
    // console.log('this is newPet', newPet)
	return axios({
		url: apiUrl + '/pets',
		method: 'POST',
		headers: {
			Authorization: `Token token=${user.token}`,
		},
		data: {
			pet: newPet,
		},
	})
}

// UPDATE
export const updatePet = (user, updatedPet) => {
    console.log('updatePet in API was hit')
    // inour createPet form, we're building an object
    // when we pass that object into the api createPet function
    // it's going to look like the pets in our database
    // we're going to refer to this as a newPet, so we can just pass the entire object created by the form into an Axios request to our back-end (Pets API) and call it 'pet'
    // console.log('this is user', user)
    console.log('this is updatedPet', updatedPet)
	return axios({
		url: `${apiUrl}/pets/${updatedPet.id}`,
		method: 'PATCH',
		headers: {
			Authorization: `Token token=${user.token}`
		},
		data: {
			pet: updatedPet
		}
	})
}

// DELETE
export const removePet = (user, petId) => {
	return axios({
		url:`${apiUrl}/pets/${petId}`,
		method: 'DELETE',
		headers: {
			Authorization: `Token token=${user.token}`
		}
	})
}