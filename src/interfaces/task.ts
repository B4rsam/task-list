export type priorities = 0 | 1 | 2;
export type validStatus = "ongoing" | "complete";

export interface ITask {
    id: number;
    userId: number;
    body: string;
    priority: priorities;
    status: validStatus;
    createDate: string;
    completedDate?: string;
}

export interface ITaskResponse {
    data: ITask[];
    total: number;
    completed: number;
}
