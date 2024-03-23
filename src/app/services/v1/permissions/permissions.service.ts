import { Injectable } from '@angular/core';
import { BaseService } from '../../base/base.service';
import { PermissionsModel } from 'src/app/@core/domain/models/permissions/permissions.model';
import { CreatePermissionDto } from 'src/app/@core/domain/models/permissions/dto/permissionsCreateDto.model';
import { UpdatePermissionDto } from 'src/app/@core/domain/models/permissions/dto/permissionsUpdateDto.model';
import { HttpService } from '../../http/http.service';

@Injectable()
export class PermissionsService extends BaseService<PermissionsModel, CreatePermissionDto, UpdatePermissionDto> {

  constructor(http: HttpService<PermissionsModel>) {
    super(http, 'v1/permissions');
  }
}
