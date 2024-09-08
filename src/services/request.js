import apiInstance from "./instance.js";

const getTasks = async () => {
    const response = apiInstance.get();
    return response;
}

function deleteTask(id) {
    return apiInstance.delete(`/${id}`);
}

function addTask(task) {
    return apiInstance.post("/add", {
        todo: task.todo,
        completed: task.completed,
        userId: 1,
    });
}

function editStatus(id, status) {
    return apiInstance.put(`/${id}`, {
        completed: status,
    });
}

function editTask(id, text) {
    return apiInstance.put(`/${id}`, {
        todo: text,
    });
}

export { getTasks, deleteTask, addTask, editStatus, editTask };
