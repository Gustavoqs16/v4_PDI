import { Injectable } from '@angular/core';
import { HttpService } from '../../http/http.service';
import { BaseService } from '../../base/base.service';
import { RolePermissionModel } from 'src/app/@core/domain/models/rolePermission/rolePermission.model';
import { CreateRolePermissionDto } from 'src/app/@core/domain/models/rolePermission/dto/roleCreateDto.model';

@Injectable()
export class RolePermissionsService extends BaseService<RolePermissionModel, CreateRolePermissionDto, null> {

  constructor(http: HttpService<RolePermissionModel>) {
    super(http, 'v1/role-permissions');
  }

  myPermissions(): Promise<Array<RolePermissionModel>> {
    return this.http.get(`${this.base_url}/user/mypermissions`);
  }

}
