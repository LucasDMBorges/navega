import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContribuicaoMensalComponent } from './contribuicao-mensal/contribuicao-mensal.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MenuItem } from 'primeng/api';
import { SidebarComponent } from 'src/app/components/sidebar/sidebar.component';

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
