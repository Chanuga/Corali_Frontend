import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

const AddTaskModal = ({ showModal, onTaskCloseClick, onAddNewTaskClick, handleChangeInput }) => {
    return (
        <Modal show={showModal} onHide={() => onTaskCloseClick()}>
            <Modal.Header closeButton>
                <Modal.Title>Create Task</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Task Name</Form.Label>
                        <Form.Control type="text" placeholder="eating..." onChange={e => handleChangeInput(e, "title")}/>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => onTaskCloseClick()}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => onAddNewTaskClick()}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default AddTaskModal