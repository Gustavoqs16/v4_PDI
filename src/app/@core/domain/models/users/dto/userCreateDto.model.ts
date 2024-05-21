import { UserGenero } from "../../../enums/genero.enum";

export class CreateUserDto {
    name: string;
    email: string;
    password: string;
    roleId: number;
    sexo: UserGenero;
    data_admissao: string;
}
