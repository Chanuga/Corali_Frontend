import React from 'react'
import { Button, Container, Table } from 'react-bootstrap'
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const DataContent = ({ tableData, onChangeTaskStatusClick, onDeleteTaskClick }) => {
    console.log("tableData", tableData);
    return (
        <Container>
            <Table responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Task Name</th>
                        <th>Task Status</th>
                        <th>Actions</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {tableData?.map((t, i) => {
                        return (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{t?.title}</td>
                                <td>
                                    {(t?.is_complete ? (
                                        <FaCheckCircle
                                            className='icons'
                                            style={{ color: 'green' }}
                                        />) 
                                        : 
                                        (<FaTimesCircle 
                                        className='icons' 
                                        style={{ color: 'red' }} 
                                        />)
                                    )}
                                </td>
                                <td>
                                    <Button onClick={() => onChangeTaskStatusClick(t?._id)}>{t?.is_complete ? "Pending" : "Done"}</Button>
                                </td>
                                <td>
                                    <Button variant="danger" onClick={() => onDeleteTaskClick(t?._id)}>Delete</Button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </Container>
    )
}

export default DataContent