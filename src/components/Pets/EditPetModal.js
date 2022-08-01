import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import PetForm from "../shared/PetForm";

const EditPetModal = (props) => {
    const {user, show, handleClose, updatePet, msgAlert, triggerRefresh} = props

    const [pet, setPet] = useState(props.pet)

    const handleChange = (e) => {console.log('something changed')}

    const handleSubmit = (e) => {console.log('something to submit')}

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton/>
            <Modal.Body>
                <PetForm
                    pet={pet}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    heading="Update Pet"
                />
            </Modal.Body>
        </Modal>
    )
}

export default EditPetModal