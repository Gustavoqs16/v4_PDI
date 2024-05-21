import { Injectable } from '@angular/core';
import { BaseService } from '../../base/base.service';
import { PdcOrderModel } from 'src/app/@core/domain/models/pdc-order/pdc-order.modal';
import { CreateDtoPdcOrder } from 'src/app/@core/domain/models/pdc-order/dto/pdcOrderCreateDto.model';
import { HttpService } from '../../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class PdcOrdersService extends BaseService<PdcOrderModel, CreateDtoPdcOrder, null> {

  constructor(http: HttpService<PdcOrderModel>) {
    super(http, 'v1/pdc-order');
  }
}
