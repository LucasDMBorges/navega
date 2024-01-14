import { Component, OnInit } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { ChartModule } from 'primeng/chart';
import { CardModule } from 'primeng/card';
import { ListboxModule } from 'primeng/listbox';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { CARDS, Card, DATA, OPTIONS } from './contribuicao-mensal-mock.const';

@Component({
  standalone: true,
  selector: 'app-contribuicao-mensal',
  templateUrl: './contribuicao-mensal.component.html',
  styleUrls: ['./contribuicao-mensal.component.less'],
  imports: [
    CommonModule,
    DividerModule,
    ChartModule,
    CardModule,
    ListboxModule,
    ButtonModule,
  ],
})
export class ContribuicaoMensalComponent implements OnInit {
  data: any;

  options: any;

  public cards: Card[] = CARDS;
  ngOnInit() {
    this.data = DATA;

    this.options = OPTIONS;
  }
}
