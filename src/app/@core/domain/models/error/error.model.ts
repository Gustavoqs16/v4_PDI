export class ErrorModel {
    status: number;
    path: string;
    timestamp: Date;
    message: Array<string> | string;
}