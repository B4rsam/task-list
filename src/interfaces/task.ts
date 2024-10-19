export type priorities = 1 | 2 | 3;
export type validStatus = "ongoing" | "complete";

export interface ITask {
    id: number;
    userId: number;
    body: string;
    priority?: priorities | 0;
    status: validStatus;
    createDate: Date;
    completedDate?: Date;
}