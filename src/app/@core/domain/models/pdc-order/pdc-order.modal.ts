import { BaseModel } from "../base.model";
import { CompanyModel } from "../company/company.model";
import { SectorModel } from "../sector/sector.model";
import { UsersModel } from "../users/users.model";

export class PdcOrderModel extends BaseModel {

    name: string;
    image: string;
    order: number;
    companiesId: number;
    company: CompanyModel;
    sector: SectorModel;
    sectorId: number;
    userId: number;
    last_user_update: UsersModel;

}
