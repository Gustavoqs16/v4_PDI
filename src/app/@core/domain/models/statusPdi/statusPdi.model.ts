import { PdiModel } from "../pdi/pdi.model";

export class StatusPdiModel {

    id?: number;
    create_at: Date;
    update_at: Date;
    deleted_at?: Date;
    name: string;
    pdi?: PdiModel;

}