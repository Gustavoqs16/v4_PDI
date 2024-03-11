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
    {
      label: 'teste',
      key: false,
    },
  ];

  constructor() {}

  ngOnInit() {}
}
