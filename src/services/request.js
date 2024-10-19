import apiInstance from "./instance.js";

const getTasks = async () => {
    return apiInstance.get();
}

function deleteTask(id) {
    return apiInstance.delete(`/${id}/delete`);
}

function addTask(task) {
    return apiInstance.post("/add", {
        body: task.todo,
        completed: task.completed,
        userId: 1,
    });
}

function editStatus(id, status) {
    return apiInstance.put(`/${id}/update`, {
        status: status ? "complete" : "ongoing",
    });
}

function editTask(id, text) {
    return apiInstance.put(`/${id}/edit`, {
        body: text,
    });
}

function userAuth(userData) {
    return apiInstance.put(`/user/login`, userData);
}

export { getTasks, deleteTask, addTask, editStatus, editTask, userAuth };
