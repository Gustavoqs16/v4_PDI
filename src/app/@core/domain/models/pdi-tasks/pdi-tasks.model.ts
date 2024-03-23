import { BaseModel } from "../base.model";
import { PdiModel } from "../pdi/pdi.model";

export class PdiTasksModel extends BaseModel {

    pdiId: number;
    pdi: PdiModel
    descricao: string;
    concluido?: boolean;

}