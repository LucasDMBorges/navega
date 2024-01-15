import { ContribuicaoMensalComponent } from './contribuicao-mensal/contribuicao-mensal.component';
import { SidebarComponent } from './../../components/sidebar/sidebar.component';
import { HeaderComponent } from './../../components/header/header.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        DashboardComponent,
        HeaderComponent,
        SidebarComponent,
        ContribuicaoMensalComponent,
        RouterTestingModule,
        NoopAnimationsModule,
      ],
      schemas: [NO_ERRORS_SCHEMA],
    });

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize items array with "MEU PLANO"', () => {
    expect(component.items).toBeDefined();
    expect(component.items.length).toBe(1);
    expect(component.items[0].label).toBe('MEU PLANO');
  });

  it('should initialize home property with icon and routerLink', () => {
    expect(component.home).toBeDefined();
    expect(component.home.icon).toBe('pi pi-arrow-left');
    expect(component.home.routerLink).toBe('/');
  });
});
