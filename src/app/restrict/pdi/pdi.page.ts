import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

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
  ]

  constructor() {}

  ngOnInit() {}

  favoriteChanged(event: any) {
    // Lógica para lidar com a mudança de estado do checkbox
    console.log('Checkbox checked:', event.detail.checked);
  }

  getCheck(elem: any): string {
    let checkIcon = elem.check? 'heart' : 'heart-outline';
    return checkIcon;
  }

  toggleCheck(index: number) {
    this.list[index].check = !this.list[index].check;
  }
}
