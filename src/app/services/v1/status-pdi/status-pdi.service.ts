import { Injectable } from '@angular/core';
import { StatusPdiModel } from 'src/app/@core/domain/models/statusPdi/statusPdi.model';
import { HttpService } from '../../http/http.service';
import { BaseService } from '../../base/base.service';
import { CreateStatusPdiDto } from 'src/app/@core/domain/models/statusPdi/dto/statusPdiCreateDto.model';
import { UpdateStatusPdiDto } from 'src/app/@core/domain/models/statusPdi/dto/statusPdiUpdateDto.model';

@Injectable()
export class StatusPdiService extends BaseService<StatusPdiModel, CreateStatusPdiDto, UpdateStatusPdiDto> {

  constructor(http: HttpService<StatusPdiModel>) {
    super(http, 'v1/status-pdi');
  }
}
