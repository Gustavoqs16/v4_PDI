import { BaseModel } from "../base.model";
import { PdiModel } from "../pdi/pdi.model";

export class StatusPdiModel extends BaseModel {

    name: string;
    pdi?: PdiModel;

}