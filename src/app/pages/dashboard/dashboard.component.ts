import { SidebarComponent } from './../../components/sidebar/sidebar.component';
import { HeaderComponent } from './../../components/header/header.component';
import { Component } from '@angular/core';
import { ContribuicaoMensalComponent } from './contribuicao-mensal/contribuicao-mensal.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MenuItem } from 'primeng/api';

@Component({
  standalone: true,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less'],
  imports: [
    HeaderComponent,
    SidebarComponent,
    ContribuicaoMensalComponent,
    BreadcrumbModule,
  ],
})
export class DashboardComponent {
  public items: MenuItem[] = [{ label: 'MEU PLANO' }];

  public home: MenuItem = { icon: 'pi pi-arrow-left', routerLink: '/' };
}
