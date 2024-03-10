import { CompanyModel } from "../company/company.model";
import { StatusPdiModel } from "../statusPdi/statusPdi.model";
import { UsersModel } from "../users/users.model";

export class PdiModel {

    id: number;
    create_at: Date;
    update_at: Date;
    deleted_at?: Date;
    name: string;
    userId: number;
    status_pdiId: number;
    companiesId: number;
    concluido: boolean;
    user: UsersModel;
    status_pdi: StatusPdiModel;
    company: CompanyModel;

}