import { Injectable } from '@angular/core';
import { BaseService } from '../../base/base.service';
import { PdiModel } from 'src/app/@core/domain/models/pdi/pdi.model';
import { CreatePdiDto } from 'src/app/@core/domain/models/pdi/dto/pdiCreateDto.model';
import { UpdatePdiDto } from 'src/app/@core/domain/models/pdi/dto/pdiUpdateDto.model';
import { HttpService } from '../../http/http.service';

@Injectable()
export class PdiService extends BaseService<PdiModel, CreatePdiDto, UpdatePdiDto> {

  constructor(http: HttpService<PdiModel>) {
    super(http, 'v1/pdi');
  }
}
