import apiUrl from '../apiConfig'
import axios from 'axios'

// CREATE
export const createToy = (user, petId, newToy) => {
    console.log('createToy in API was hit')
    console.log('this is user in createToy', user)
    console.log('this is newToy in createToy', newToy)
	return axios({
		url: `${apiUrl}/toys/${petId}`,
		method: 'POST',
		data: {
			toy: newToy,
		},
	})
}

// UPDATE
export const updateToy = (user, petId, updatedToy) => {
    console.log('updateToy in API was hit')
    console.log('this is updatedToy', updatedToy)
	return axios({
		url: `${apiUrl}/toys/${petId}/${updatedToy.id}`,
		method: 'PATCH',
		headers: {
			Authorization: `Token token=${user.token}`
		},
		data: {
			toy: updatedToy
		}
	})
}

// DELETE
export const deleteToy = (user, petId, toyId) => {
    console.log('deleteToy in API was hit')
	return axios({
		url:`${apiUrl}/pets/${petId}/${toyId}`,
		method: 'DELETE',
		headers: {
			Authorization: `Token token=${user.token}`
		}
	})
}