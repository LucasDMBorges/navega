import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginPageComponent } from './login-page.component';
import { MessageService } from 'primeng/api';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        LoginPageComponent,
        MessageService,
        UserService,
        FormBuilder,
        RouterTestingModule,
      ],
    });
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
