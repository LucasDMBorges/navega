import { User } from './../../shared/models/user.model';
import { UserService } from './../../services/user.service';
import { ButtonModule } from 'primeng/button';
import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { MessageService } from 'primeng/api';

@Component({
  standalone: true,
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.less'],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    ToastModule,
  ],
  providers: [MessageService],
})
export class LoginPageComponent {
  public form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  public passwordVisible = false;

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private messageService: MessageService
  ) {}

  login() {
    if (this.form.invalid) return;
    const user = this.form.getRawValue() as User;
    this.userService.login(user).subscribe((res) => {
      if (!res.sucesso) {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'E-mail ou senha incorreto',
        });
      }
    });
  }

  togglePassword() {
    this.passwordVisible = !this.passwordVisible;
  }
}
