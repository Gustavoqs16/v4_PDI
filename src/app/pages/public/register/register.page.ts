import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserGenero } from 'src/app/@core/domain/enums/genero.enum';
import { CreateUserDto } from 'src/app/@core/domain/models/users/dto/userCreateDto.model';
import { UsersModel } from 'src/app/@core/domain/models/users/users.model';
import { ToastService } from 'src/app/services/toast/toast.service';
import { UsersService } from 'src/app/services/v1/users/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  isMobile: boolean = false;
  newUserForm: FormGroup;
  typePassword: string = 'password';

  constructor(
    private userService: UsersService,
    private readonly toast: ToastService
  ) {
    this.detectarTamanhoDaTela();

    this.newUserForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      photo: new FormControl(''),
      cellPhone: new FormControl(''),
      privacyPolicy: new FormControl(false),
      termsService: new FormControl(false),
    });
  }

  ngOnInit() {}

  detectarTamanhoDaTela() {
    this.isMobile = window.innerWidth <= 768;
  }

  togglePassword() {
    this.typePassword = this.typePassword === 'password' ? 'text' : 'password';
  }

  getValidationForm() {
    let firstValidation =
      this.newUserForm.get('privacyPolicy')?.value &&
      this.newUserForm.get('termsService')?.value;
    return firstValidation && this.newUserForm.valid;
  }

  async registerUser() {
    try {
      let request = this.newUserForm.value;

      let newRequestSend: CreateUserDto = {
        name: request.name,
        email: request.email,
        password: request.password,
        roleId: 1,
        sexo: UserGenero.MASCULINO,
        data_admissao: '2022-10-10'
      };

      await this.userService.create(newRequestSend);
    } catch (error) {
      await this.toast.show(
        'Formulário inválido. Por favor, preencha os campos corretamente.',
        'danger'
      );
    }
  }
}
