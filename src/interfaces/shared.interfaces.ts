export interface IGeneralResponse {
    code: number;
    message: string;
}

export interface IDataResponse<T> extends IGeneralResponse {
    data?: T;
}
