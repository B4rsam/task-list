import apiInstance from "./instance.ts";

const getTasks = async () => {
    return apiInstance.get("task");
};

function deleteTask(id: number) {
    return apiInstance.delete(`task/${id}/delete`);
}

function addTask(task: any) {
    return apiInstance.post("task/add", {
        body: task.body,
        status: task.status,
    });
}

function editStatus(id: number, status: boolean) {
    return apiInstance.put(`task/${id}/update`, {
        status: status ? "complete" : "ongoing",
    });
}

function editTask(id: number, data: any) {
    return apiInstance.put(`task/${id}/edit`, data);
}

export { getTasks, deleteTask, addTask, editStatus, editTask };
