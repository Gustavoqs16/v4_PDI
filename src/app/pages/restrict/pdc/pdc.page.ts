import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pdc',
  templateUrl: './pdc.page.html',
  styleUrls: ['./pdc.page.scss'],
})
export class PdcPage implements OnInit {
  currentProgress: number = 4;
  maxProgress: number;
  lastUpdate: Date;

  steps = [
    {
      meta: 'meta 1',
      objetivo: 1,
      concluido: true
    },
    {
      meta: 'meta 1',
      objetivo: 1,
      concluido: false
    },
    {
      meta: 'meta 1',
      objetivo: 1,
      concluido: false
    },
    {
      meta: 'meta 1',
      objetivo: 1,
      concluido: false
    },
    {
      meta: 'meta 1',
      objetivo: 1,
      concluido: false
    },
    {
      meta: 'meta 1',
      objetivo: 1,
      concluido: false
    },
    {
      meta: 'meta 1',
      objetivo: 1,
      concluido: true
    },
    {
      meta: 'meta 1',
      objetivo: 1,
      concluido: false
    },
    {
      meta: 'meta 1',
      objetivo: 1,
      concluido: false
    },

  ];

  ngOnInit() {
    this.updateProgress();
  }

  updateProgress() {
    // A variável circunference calcula a circunferência total do círculo.
    const circumference = 2 * Math.PI * 15;
    // Calcula o progresso em porcent
  }

  getClassButton(step: any){
    return step ? 'concluido' : 'nao-concluido';
  }

  getTextButton(step: any){
    return step ? 'Concluído' : 'Para fazer';
  }
}
