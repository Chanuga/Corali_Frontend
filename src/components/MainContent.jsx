import React, { useEffect, useState } from 'react'
import ActionButtons from './ActionButtons'
import DataContent from './DataContent'
import { addNewTask, changeTaskStatus, deleteTask, fetchAllTasksData } from '../utilities/apis/apiRequests';
import { Spinner } from 'react-bootstrap';
import AddTaskModal from './AddTaskModal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainContent = () => {
    const [tableData, setTableData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [taskName, setTaskName] = useState("");

    const notifySuccess = (msg) => toast.success(msg);
    const notifyError = (msg) => toast.error(msg);

    const onAddTaskClick = () => {
        setShowModal(!showModal);
    }

    const onTaskCloseClick = () => {
        setShowModal(!showModal);
    }

    const onChangeTaskStatusClick = async (id) => {
        try {
            setIsLoading(true)
            const res = await changeTaskStatus({id});

            if (res?.Status !== 200) {
                notifyError(`Something went wrong !`);
                setIsLoading(false)
                return
            }

            notifySuccess(`Task status changed in task ${id}`);
            fetchAllTask();

        } catch (error) {
            console.error(error);
            notifyError(`Something went wrong !`);
        } finally {
            setIsLoading(false)
        }
    }

    const onDeleteTaskClick = async (id) => {
        try {
            setIsLoading(true)
            const res = await deleteTask({id});

            if (res?.Status !== 200) {
                notifyError(`Something went wrong !`);
                setIsLoading(false)
                return
            }

            notifySuccess(`Deleted task ${id}`);
            fetchAllTask();

        } catch (error) {
            console.error(error);
            notifyError(`Something went wrong !`);
        } finally {
            setIsLoading(false)
        }
    }

    const onAddNewTaskClick = async () => {

        const reqBody = {
            "title": taskName,
            "is_complete": false
        }

        try {
            const res = await addNewTask({reqBody})

            if (res?.Status !== 200) {
                notifyError(`Something went wrong !`);
                return
            }

            notifySuccess(`${taskName} added`);
            fetchAllTask()
            setShowModal(!showModal);
        
        } catch (error) {
            console.error(error);
            notifyError(`Something went wrong !`);
        } finally {
            setIsLoading(false)
        }
    }

    /* Company Input Handle Start */
    const handleChangeInput = (e, fieldName) => {
        setTaskName(e.target.value);
    };
    /* Company Input Handle Start */

    useEffect(() => {
        fetchAllTask()
    }, [])

    const fetchAllTask = async () => {
        try {
            setIsLoading(true)
            const res = await fetchAllTasksData();

            if (res?.Status !== 200) {
                setIsLoading(false)
                return
            }

            setTableData(res?.Result?.map((t, i) => { return { key: t?._id, ...t } }))
            setIsLoading(false)
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <>
            <ToastContainer />
            {!isLoading ? <>
                <ActionButtons onAddTaskClick={onAddTaskClick}/>
                <DataContent tableData={tableData} onChangeTaskStatusClick={onChangeTaskStatusClick} onDeleteTaskClick={onDeleteTaskClick}/>
            </> 
            :
            <div style={{display: 'flex', justifyContent: 'center', margin: '20px'}}>
                <Spinner animation="grow" variant="primary" />
            </div>
            }

            <AddTaskModal showModal={showModal} onTaskCloseClick={onTaskCloseClick} onAddNewTaskClick={onAddNewTaskClick} handleChangeInput={handleChangeInput}/>
        </>
    )
}

export default MainContent