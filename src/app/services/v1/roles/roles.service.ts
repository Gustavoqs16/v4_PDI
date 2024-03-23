import { Injectable } from '@angular/core';
import { BaseService } from '../../base/base.service';
import { RolesModel } from 'src/app/@core/domain/models/roles/roles.model';
import { CreateRoleDto } from 'src/app/@core/domain/models/roles/dto/roleCreateDto.model';
import { UpdateRoleDto } from 'src/app/@core/domain/models/roles/dto/roleUpdateDto.model';
import { HttpService } from '../../http/http.service';

@Injectable()
export class RolesService extends BaseService<RolesModel, CreateRoleDto, UpdateRoleDto> {

  constructor(http: HttpService<RolesModel>) {
    super(http, 'v1/role');
  }
}
