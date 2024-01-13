import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { ContribuicaoMensalComponent } from './contribuicao-mensal/contribuicao-mensal.component';

export const DASHBOARD_ROUTES: Route[] = [
  {
    path: '',
    pathMatch: 'prefix',
    children: [
      {
        path: '',
        redirectTo: 'contribuicao-mensal',
        pathMatch: 'full',
      },
      { path: 'contribuicao-mensal', component: ContribuicaoMensalComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(DASHBOARD_ROUTES)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
