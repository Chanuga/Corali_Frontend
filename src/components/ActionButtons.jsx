import React from 'react'
import { Button, Container, Row } from 'react-bootstrap'

const ActionButtons = ({onAddTaskClick}) => {
    return (
        <Container>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', margin: '10px'}}>
                <div>
                    <Button variant="primary" onClick={() => onAddTaskClick()}>Add</Button>
                </div>
            </div>
        </Container>
    )
}

export default ActionButtons