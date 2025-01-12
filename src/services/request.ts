import apiInstance from "./instance.ts";
import { validStatus } from "@/interfaces/task.ts";

const getTasks = async () => {
    return apiInstance.get("task");
};

function deleteTask(id: number) {
    return apiInstance.delete(`task/${id}/delete`);
}

function addTask(task: any) {
    return apiInstance.post("task/add", {
        body: task.todo,
        completed: task.completed,
        userId: 1,
    });
}

function editStatus(id: number, status: validStatus) {
    return apiInstance.put(`task/${id}/update`, {
        status: status ? "complete" : "ongoing",
    });
}

function editTask(id: number, text: string) {
    return apiInstance.put(`task/${id}/edit`, {
        body: text,
    });
}

export { getTasks, deleteTask, addTask, editStatus, editTask };
