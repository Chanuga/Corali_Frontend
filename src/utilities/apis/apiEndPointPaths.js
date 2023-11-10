import globalValues from "../configs/globleValues";

const {
	REACT_APP__CORALI_APIS__BASEURL
} = globalValues.baseURLS;

const apiEndpointPaths = {
    taskAPIs: {
        fetchAllTasksData: `${REACT_APP__CORALI_APIS__BASEURL}/api/tasks`, // GET
        changeTaskStatus: `${REACT_APP__CORALI_APIS__BASEURL}/api/tasks/complete`, // GET
        deleteTask: `${REACT_APP__CORALI_APIS__BASEURL}/api/tasks`, // POST
        addNewTask: `${REACT_APP__CORALI_APIS__BASEURL}/api/tasks`, // POST
    }
}

export default apiEndpointPaths;