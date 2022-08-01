import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import ToyForm from "../shared/ToyForm";
import { updateToy } from "../../api/toys";

const EditToyModal = (props) => {
    const {user, pet, show, handleClose, msgAlert, triggerRefresh} = props

    const [toy, setToy] = useState(props.toy)

    const handleChange = (e) => {
        setToy(prevToy => {
            let value = e.target.value
            const name = e.target.name

            // console.log('this is the input type', e.target.type)

            // this handles the checkbox, changing on to true, etc.
            if (name === "isSqueaky" && e.target.checked) {
                value = true
            } else if (name === "isSqueaky" && !e.target.checked) {
                value = false
            }

            const updatedToy = { [name]: value}
            return {
                ...prevToy,
                ...updatedToy
            }
        })
    }

    const handleSubmit = (e) => {
        // e equals event
        e.preventDefault()

        updateToy(user, pet._id, toy)
            // if we're successful in the modal, we want the  modal to close
            .then(() => handleClose())
            // send a success message to the user
            .then(() => {
                msgAlert({
                    heading: 'Oh Yeah!',
                    message: `Great! ${pet.name} loves it even more! `,
                    variant: 'success'
                })
            })
            // if everything is successful, we need to run triggerRefresh received as a prop from 'ShowPet' component
            .then(() => triggerRefresh())
            // if there is an error, tell the user about it
            .catch(() => {
                msgAlert({
                    heading: 'Oh no!',
                    message: 'Something went wrong...please try again',
                    variant: 'danger'
                })
            })
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton/>
            <Modal.Body>
                <ToyForm
                    toy={toy}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    heading="Update this toy!"
                />
            </Modal.Body>
        </Modal>
    )
}

export default EditToyModal