import { Injectable } from '@angular/core';
import { BaseService } from '../../base/base.service';
import { HttpService } from '../../http/http.service';
import { PdcModel } from 'src/app/@core/domain/models/pdc/pdc.model';
import { CreateDtoPdc } from 'src/app/@core/domain/models/pdc/dto/pdcCreateDto.model';
import { UpdateDtoPdc } from 'src/app/@core/domain/models/pdc/dto/pdcUpdateDto.model';

@Injectable()
export class PdcService extends BaseService<PdcModel, CreateDtoPdc, UpdateDtoPdc> {

  constructor(http: HttpService<PdcModel>) {
    super(http, 'v1/pdc');
  }

  // createPdc(data: CreateDtoPdc, image: File) {
  //   const formData = new FormData();
  //   formData.append('data', JSON.stringify(data));
  //   formData.append('image', image);

  //   return this.http.post('', formData);
  // }
}