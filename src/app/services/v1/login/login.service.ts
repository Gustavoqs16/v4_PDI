import { Injectable } from '@angular/core';
import { HttpService } from '../../http/http.service';
import { LoginModel } from 'src/app/@core/domain/models/login/login.model';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { StorageService } from '../../storage/storage.service';
import { UsersModel } from 'src/app/@core/domain/models/users/users.model';
import { ApiRoutes } from 'src/app/routes/api-routes';

@Injectable()
export class LoginService {

  $isLogged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  $user: BehaviorSubject<UsersModel> = new BehaviorSubject<UsersModel>(new UsersModel());

  constructor(
    private readonly httpService: HttpService<LoginModel>,
    private readonly storageService: StorageService,
    private readonly router: Router,
  ) {
    this.checkLogged();
  }

  async login(email: string, password: string) {
    const res = await this.httpService.post(ApiRoutes.login, { email, password });

    const data: LoginModel = res;

    this.storageService.set('token', data.data.access_token);
    this.storageService.set('user', JSON.stringify(data.user));

    this.checkLogged();

    await this.router.navigate(['app', 'dashboard']);
  }

  async logout() {
    this.storageService.clearStorage();
    this.$isLogged.next(false);
    this.$user.next(new UsersModel());
    await this.router.navigate(['login']);
  }

  async getStorageUser() {
    const _user = this.storageService.get('user');

    if (!!_user) {
      const user: UsersModel = JSON.parse(_user);

      this.$user.next(user);
    } else {
      this.$user.next(new UsersModel())
    }
  }

  checkLogged() {
    const token = this.storageService.get('token');

    if (!!token) {
      this.$isLogged.next(true);
      this.getStorageUser();
    } else {
      this.$isLogged.next(false);
      this.$user.next(new UsersModel());
    }
  }

}
