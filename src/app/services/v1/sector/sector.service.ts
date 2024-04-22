import { Injectable } from '@angular/core';
import { CreateDtoSector } from 'src/app/@core/domain/models/sector/dto/sectorCreateDto.model';
import { UpdateDtoSector } from 'src/app/@core/domain/models/sector/dto/sectorUpdateDto.model';
import { SectorModel } from 'src/app/@core/domain/models/sector/sector.model';
import { HttpService } from '../../http/http.service';
import { BaseService } from '../../base/base.service';

@Injectable()
export class SectorService extends BaseService<SectorModel, CreateDtoSector, UpdateDtoSector> {

  constructor(http: HttpService<SectorModel>) {
    super(http, 'v1/sector');
  }
}
