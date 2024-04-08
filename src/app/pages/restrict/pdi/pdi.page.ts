import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LoginService } from 'src/app/services/v1/login/login.service';
import { PdiService } from 'src/app/services/v1/pdi/pdi.service';
import { PdiTasksService } from 'src/app/services/v1/pdi-tasks/pdi-tasks.service';
import { PdiModel } from 'src/app/@core/domain/models/pdi/pdi.model';
import { UsersService } from 'src/app/services/v1/users/users.service';
import { ToastService } from 'src/app/services/toast/toast.service';
import { UsersModel } from 'src/app/@core/domain/models/users/users.model';
import { PdiTasksModel } from 'src/app/@core/domain/models/pdi-tasks/pdi-tasks.model';
import { ModalController } from '@ionic/angular';
import { ModalPdiTaskComponent } from 'src/app/components/modal-pdi-task/modal-pdi-task.component';
import { ModalPdiComponent } from 'src/app/components/modal-pdi/modal-pdi.component';

@Component({
  selector: 'app-pdi',
  templateUrl: './pdi.page.html',
  styleUrls: ['./pdi.page.scss'],
})
export class PdiPage implements OnInit {
  checklist: any;

  awards = [
    {
      type: 'awards',
      url: '../../../assets/images/awards/awards.png',
    },
    {
      type: 'collab',
      url: '../../../assets/images/awards/collab.png',
    },
    {
      type: 'stars',
      url: '../../../assets/images/awards/stars.png',
    },
    {
      type: 'performance',
      url: '../../../assets/images/awards/performance.png',
    },
    {
      type: 'medal-of-honor',
      url: '../../../assets/images/awards/medal-of-honor.png',
    },
    {
      type: 'account',
      url: '../../../assets/images/awards/account.png',
    },
    {
      type: 'forever',
      url: '../../../assets/images/awards/forever.png',
    },
  ];

  list = [
    {
      name: 'nome 1',
      message: 'mensagem nova',
      check: false,
    },
    {
      name: 'nome 2',
      message: 'mensagem nova',
      check: true,
    },
  ];

  isMobile: boolean = false;

  nomeUsuario: string;
  cargoNome: string;
  dataUltimoAlinhamento: Date;
  tempoDeEmpresa: Date;
  nomeLideranca: string | null;

  pdiUser: any | null = null;
  newPdiForm: FormGroup;
  listUsers: Array<any> = [];

  constructor(
    private readonly loginService: LoginService,
    private readonly pdiService: PdiService,
    private userService: UsersService,
    private readonly toast: ToastService,
    private pdiTasksService: PdiTasksService,
    private modalController: ModalController
  ) {
    this.detectarTamanhoDaTela();
    this.newPdiForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      userId: new FormControl(0),
    });
  }

  ngOnInit() {
    const user = this.loginService.$user.getValue();
    const { name, roleUser } = user;
    this.nomeUsuario = name;
    this.cargoNome = roleUser.name;
    this.nomeLideranca = !!roleUser.managerId ? roleUser.manager.name : null;

    this.getInfoPdiUser();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.detectarTamanhoDaTela();
  }

  detectarTamanhoDaTela() {
    this.isMobile = window.innerWidth <= 768; // Defina o limite que você considera como mobile
  }

  favoriteChanged(event: any) {
    // Lógica para lidar com a mudança de estado do checkbox
    console.log('Checkbox checked:', event.detail.checked);
  }

  getCheck(elem: any): string {
    let checkIcon = elem.check ? 'heart' : 'heart-outline';
    return checkIcon;
  }

  toggleCheck(index: number) {
    this.list[index].check = !this.list[index].check;
  }

  async getInfoPdiUser() {
    let pdiUser = await this.pdiService.getMyPdi();

    this.pdiUser = pdiUser || {};

    if (pdiUser?.id) this.getListTasks();
  }

  async getAllUsers() {
    try {
      let response = await this.userService.getAll();

      this.listUsers = response.map((item: UsersModel) => {
        return {
          name: item.name,
          type: 'radio',
          label: item.name,
          value: item.id,
        };
      });
    } catch (error) {
      await this.toast.show(
        'Erro ao listar os usúarios, entre em contato com o suporte',
        'danger'
      );
    }
  }

  async createdPdi() {
    try {
      if (this.newPdiForm.valid) {
        const objRequest = this.newPdiForm.value;
        let response = await this.pdiService.create(objRequest);
        await this.toast.show(
          `PDI ${response?.name} criado com sucesso`,
          'success'
        );

        this.getInfoPdiUser();
        this.newPdiForm.reset();
      } else {
        await this.toast.show(
          'Por favor, preencha os campos corretamente.',
          'danger'
        );
      }
    } catch (error) {
      await this.toast.show(
        'Formulário inválido. Por favor, preencha os campos corretamente.',
        'danger'
      );
    }
  }

  async getListTasks() {
    try {
      if (this.pdiUser) {
        let response: any = await this.pdiTasksService.getOne(this.pdiUser?.id);
        this.pdiUser.tasks = response.map((item: any) => {
          return {
            ...item,
            isEdit: false
          }
        }) || [];
      }
    } catch (error) {
      await this.toast.show(
        'Erro ao  as tarefas, entre em contato com o suporte',
        'danger'
      );
      this.pdiUser.tasks = [];
    }
  }

  async openPdiTasks() {
    let modal = await this.modalController.create({
      component: ModalPdiTaskComponent,
      componentProps: { pdi: this.pdiUser, isPdi: true},
      cssClass: "min-w-75vw"
    });
    await modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'pdi-task') this.getListTasks();
  }

  async openPdi() {
    let modal = await this.modalController.create({
      component: ModalPdiComponent,
      cssClass:[ "max-h-300" ,"min-w-75vw"]
    });
    await modal.present();

    const {data, role} = await modal.onWillDismiss();

    if(role == 'pdi') await this.getInfoPdiUser();
  }

  async putTaskPdi(task: any) {
    try {
      if (task?.descricao) {
        let payload = {
          descricao: task.descricao,
          concluido: task.concluido
        }
        let response = await this.pdiTasksService.update(task.id, payload);
        await this.toast.show(
          `Tarefa ${response?.descricao} atualizado com sucesso`,
          'success'
        );

        task.isEdit = false;
;      } else {
        await this.toast.show(
          'Por favor, preencha os campos corretamente.',
          'danger'
        );
      }
    } catch (error) {
      await this.toast.show(
        'Formulário inválido. Por favor, preencha os campos corretamente.',
        'danger'
      );
    }
  }
}
