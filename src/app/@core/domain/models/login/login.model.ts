import { UsersModel } from "../users/users.model";

export class LoginModel {
    data: LoginDataModel;
    user: UsersModel;
}

export class LoginDataModel {
    access_token: string;
}