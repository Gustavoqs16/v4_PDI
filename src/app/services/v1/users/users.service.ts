import { Injectable } from '@angular/core';
import { HttpService } from '../../http/http.service';
import { UsersModel } from 'src/app/@core/domain/models/users/users.model';
import { BaseService } from '../../base/base.service';
import { CreateUserDto } from 'src/app/@core/domain/models/users/dto/userCreateDto.model';
import { UpdateUserDto } from 'src/app/@core/domain/models/users/dto/userUpdateDto.model';

@Injectable()
export class UsersService extends BaseService<UsersService, CreateUserDto, UpdateUserDto> {

  constructor(http: HttpService<UsersModel>) {
    super(http, 'v1/users');
  }
}
