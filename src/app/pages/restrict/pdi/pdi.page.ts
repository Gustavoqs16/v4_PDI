import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LoginService } from 'src/app/services/v1/login/login.service';
import { PdiService } from 'src/app/services/v1/pdi/pdi.service';
import { PdiTasksService } from 'src/app/services/v1/pdi-tasks/pdi-tasks.service';

@Component({
  selector: 'app-pdi',
  templateUrl: './pdi.page.html',
  styleUrls: ['./pdi.page.scss'],
})
export class PdiPage implements OnInit {
  checklist: any = [
    {
      label: 'teste',
      key: false,
      disabled: true
    },
    {
      label: 'teste',
      key: false,
      disabled: true
    },
    {
      label: 'teste',
      key: false,
      disabled: true
    },
    {
      label: 'teste',
      key: false,
      disabled: true
    },
    {
      label: 'teste',
      key: false,
    },
    {
      label: 'teste',
      key: false,
    },
    {
      label: 'teste',
      key: false,
    },
  ];

  awards = [
    {
      type: 'awards',
      url: '../../../assets/images/awards/awards.png'
    },
    {
      type: 'collab',
      url: '../../../assets/images/awards/collab.png'
    },
    {
      type: 'stars',
      url: '../../../assets/images/awards/stars.png'
    },
    {
      type: 'performance',
      url: '../../../assets/images/awards/performance.png'
    },
    {
      type: 'medal-of-honor',
      url: '../../../assets/images/awards/medal-of-honor.png'
    },
    {
      type: 'account',
      url: '../../../assets/images/awards/account.png'
    },
    {
      type: 'forever',
      url: '../../../assets/images/awards/forever.png'
    },
  ]

  list = [
    {
      name: 'nome 1',
      message: 'mensagem nova',
      check: false
    },
    {
      name: 'nome 2',
      message: 'mensagem nova',
      check: true
    },
  ];

  isMobile: boolean = false;

  nomeUsuario: string;
  cargoNome: string;
  dataUltimoAlinhamento: Date;
  tempoDeEmpresa: Date;
  nomeLideranca: string | null;

  constructor(
    private readonly loginService: LoginService,
    private readonly pdiService: PdiService,
    private readonly pdiTaskService: PdiTasksService
  ) {
    this.detectarTamanhoDaTela();
  }

  ngOnInit() {
    const user = this.loginService.$user.getValue();
    const { name, roleUser } = user;
    console.log(user);
    this.nomeUsuario = name;
    this.cargoNome = roleUser.name;
    this.nomeLideranca = !!roleUser.managerId ? roleUser.manager.name : null;
    console.log(this.nomeLideranca)
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

}
