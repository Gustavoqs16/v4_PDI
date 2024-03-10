import { UserGenero } from "../../../enums/genero.enum";

export class UpdateUserDto {
    name?: string;
    sexo?: UserGenero;
    roleId?: number;
}