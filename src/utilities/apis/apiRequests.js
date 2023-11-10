import axios from 'axios';
import apiEndpointPaths from "./apiEndPointPaths";

export async function fetchAllTasksData() {
	try {
		const resObj = await axios.get(`${apiEndpointPaths.taskAPIs.fetchAllTasksData}`);
        debugger
		return { Status: resObj.status, Result: resObj.data  };
	} catch (error) {
		const { Status, Result } = error?.response?.data;
		return { Status: Status, Result: Result };
	}
}

export async function changeTaskStatus(reqBody = {}) {
	try {
		const resObj = await axios.post(`${apiEndpointPaths.taskAPIs.changeTaskStatus}/${reqBody.id}`);
        debugger
		return { Status: resObj.status, Result: resObj.data  };
	} catch (error) {
		const { Status, Result } = error?.response?.data;
		return { Status: Status, Result: Result };
	}
}

export async function deleteTask(reqBody = {}) {
	try {
		const resObj = await axios.post(`${apiEndpointPaths.taskAPIs.deleteTask}/${reqBody.id}`);
        debugger
		return { Status: resObj.status, Result: resObj.data  };
	} catch (error) {
		const { Status, Result } = error?.response?.data;
		return { Status: Status, Result: Result };
	}
}



export async function addNewTask(reqBody = {}) {
	try {
		const resObj = await axios.post(`${apiEndpointPaths.taskAPIs.addNewTask}`, reqBody.reqBody);
        debugger
		return { Status: resObj.status, Result: resObj.data  };
	} catch (error) {
		const { Status, Result } = error?.response?.data;
		return { Status: Status, Result: Result };
	}
}