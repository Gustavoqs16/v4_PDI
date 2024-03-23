import { Injectable } from '@angular/core';
import { BaseService } from '../../base/base.service';
import { PdiTasksModel } from 'src/app/@core/domain/models/pdi-tasks/pdi-tasks.model';
import { CreatePdiTasksDto } from 'src/app/@core/domain/models/pdi-tasks/dto/pdiTasksCreateDto.model';
import { UpdatePdiTasksDto } from 'src/app/@core/domain/models/pdi-tasks/dto/pdiTasksUpdateDto.model';
import { HttpService } from '../../http/http.service';

@Injectable()
export class PdiTasksService extends BaseService<PdiTasksModel, CreatePdiTasksDto, UpdatePdiTasksDto> {

  constructor(http: HttpService<PdiTasksModel>) {
    super(http, 'v1/pdi-tasks');
  }
}
