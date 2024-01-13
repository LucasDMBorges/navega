import { Component } from '@angular/core';
import { ContribuicaoMensalComponent } from './contribuicao-mensal/contribuicao-mensal.component';

@Component({
  standalone: true,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less'],
  imports: [ContribuicaoMensalComponent],
})
export class DashboardComponent {}
