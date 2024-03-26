import { BaseModel } from "../base.model";
import { CompanyModel } from "../company/company.model";
import { PdiTasksModel } from "../pdi-tasks/pdi-tasks.model";
import { StatusPdiModel } from "../statusPdi/statusPdi.model";
import { UsersModel } from "../users/users.model";

export class PdiModel extends BaseModel {

    name: string;
    userId: number;
    status_pdiId: number;
    companiesId: number;
    concluido: boolean;
    user: UsersModel;
    status_pdi: StatusPdiModel;
    company: CompanyModel;
    tasks: PdiTasksModel[];
}
