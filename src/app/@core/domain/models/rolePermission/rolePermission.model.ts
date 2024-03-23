import { BaseModel } from "../base.model";
import { PermissionsModel } from "../permissions/permissions.model";
import { RolesModel } from "../roles/roles.model";

export class RolePermissionModel extends BaseModel {

    roleId: number;
    role: RolesModel;
    permissionsId: number;
    permission: PermissionsModel;

}