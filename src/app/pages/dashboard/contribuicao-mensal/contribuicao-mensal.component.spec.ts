import { ContribuicaoMensalComponent } from './contribuicao-mensal.component';

import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('ContribuicaoMensalComponent', () => {
  let component: ContribuicaoMensalComponent;
  let fixture: ComponentFixture<ContribuicaoMensalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ContribuicaoMensalComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContribuicaoMensalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
