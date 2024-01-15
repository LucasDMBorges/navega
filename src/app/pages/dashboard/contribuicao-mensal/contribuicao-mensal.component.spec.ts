import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContribuicaoMensalComponent } from './contribuicao-mensal.component';
import { DividerModule } from 'primeng/divider';
import { ChartModule } from 'primeng/chart';
import { CardModule } from 'primeng/card';
import { ListboxModule } from 'primeng/listbox';
import { ButtonModule } from 'primeng/button';
import { DATA, OPTIONS } from './contribuicao-mensal-mock.const';

describe('ContribuicaoMensalComponent', () => {
  let component: ContribuicaoMensalComponent;
  let fixture: ComponentFixture<ContribuicaoMensalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [
        ContribuicaoMensalComponent,
        DividerModule,
        ChartModule,
        CardModule,
        ListboxModule,
        ButtonModule,
      ],
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

  it('should initialize data and options in ngOnInit', () => {
    component.ngOnInit();
    expect(component.data).toEqual(DATA);
    expect(component.options).toEqual(OPTIONS);
  });

  it('should render cards in the template', () => {
    component.ngOnInit();
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.card')).toBeTruthy();
  });
});
