import { UserGenero } from "../../enums/genero.enum";
import { RolesModel } from "../roles/roles.model";

export class UsersModel {

    id: number;
    create_at: Date;
    update_at: Date;
    deleted_at?: Date;
    name: string;
    email: string;
    password: string;
    error_password: number;
    change_password: boolean;
    is_super_admin: boolean;
    is_admin_company: boolean;
    sexo: UserGenero;
    companiesId: number;
    photo?: string;
    roleId: number;
    role: RolesModel; 

}