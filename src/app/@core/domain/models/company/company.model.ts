import { RolesModel } from "../roles/roles.model";
import { UsersModel } from "../users/users.model";

export class CompanyModel {

    id: number;
    create_at: Date;
    update_at: Date;
    deleted_at?: Date;
    razao_social: string;
    nome_fantasia: string;
    documento: string;
    logo: string;
    user: UsersModel;
    roleId: number;
    role: RolesModel;

}