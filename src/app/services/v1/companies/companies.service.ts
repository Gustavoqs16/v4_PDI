import { Injectable } from '@angular/core';
import { BaseService } from '../../base/base.service';
import { CompanyModel } from 'src/app/@core/domain/models/company/company.model';
import { UpdateCompanyDto } from 'src/app/@core/domain/models/company/dto/companyUpdateDto.model';
import { CreateCompanyDto } from 'src/app/@core/domain/models/company/dto/companyCreateDto.model';
import { HttpService } from '../../http/http.service';

@Injectable()
export class CompaniesService extends BaseService<CompanyModel, CreateCompanyDto, UpdateCompanyDto> {

  constructor(http: HttpService<CompanyModel>) {
    super(http, 'v1/company');
  }
}
