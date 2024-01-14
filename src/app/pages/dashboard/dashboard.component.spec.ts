import { HeaderComponent } from '../../components/header/header.component';
import { DashboardComponent } from './dashboard.component';

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SidebarComponent } from 'src/app/components/sidebar/sidebar.component';
import { ContribuicaoMensalComponent } from './contribuicao-mensal/contribuicao-mensal.component';

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
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
