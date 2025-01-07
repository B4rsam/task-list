import apiInstance from "./instance.js";

const getTasks = async () => {
    return apiInstance.get("task", { withCredentials: true });
};

function deleteTask(id) {
    return apiInstance.delete(`task/${id}/delete`);
}

function addTask(task) {
    return apiInstance.post("task/add", {
        body: task.todo,
        completed: task.completed,
        userId: 1,
    });
}

function editStatus(id, status) {
    return apiInstance.put(`task/${id}/update`, {
        status: status ? "complete" : "ongoing",
    });
}

function editTask(id, text) {
    return apiInstance.put(`task/${id}/edit`, {
        body: text,
    });
}

export { getTasks, deleteTask, addTask, editStatus, editTask };
