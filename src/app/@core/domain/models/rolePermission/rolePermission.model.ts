import { PermissionsModel } from "../permissions/permissions.model";
import { RolesModel } from "../roles/roles.model";

export class RolePermissionModel {

    id: number;
    create_at: Date;
    update_at: Date;
    deleted_at?: Date;
    roleId: number;
    role: RolesModel;
    permissionsId: number;
    permission: PermissionsModel;

}