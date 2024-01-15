import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { of } from 'rxjs';
import { LoginPageComponent } from './login-page.component';
import { UserService } from '../../services/user.service';
import { MessageService } from 'primeng/api';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;
  let userServiceSpy: jest.Mocked<UserService>;
  let messageServiceSpy: jest.Mocked<MessageService>;

  beforeEach(waitForAsync(() => {
    userServiceSpy = {
      login: jest.fn(),
    } as unknown as jest.Mocked<UserService>;

    messageServiceSpy = {
      add: jest.fn(),
    } as unknown as jest.Mocked<MessageService>;

    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        LoginPageComponent,
        ReactiveFormsModule,
        InputTextModule,
        ButtonModule,
        ToastModule,
      ],
      providers: [
        { provide: UserService, useValue: userServiceSpy },
        { provide: MessageService, useValue: messageServiceSpy },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form with empty email and password', () => {
    expect(component.form.value).toEqual({ email: '', password: '' });
  });

  it('should set passwordVisible to true when togglePassword is called', () => {
    component.togglePassword();
    expect(component.passwordVisible).toBe(true);
  });

  it('should set passwordVisible to false when togglePassword is called', () => {
    component.passwordVisible = true;
    component.togglePassword();
    expect(component.passwordVisible).toBe(false);
  });
});
