import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import { MessageService } from 'primeng/api';

@Component({
  standalone: true,
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.less'],
  imports: [
    CommonModule,
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
    senha: ['', [Validators.required]],
  });

  public passwordVisible = false;

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private messageService: MessageService
  ) {}

  login() {
    const usuario = this.form.getRawValue() as Usuario;
    this.usuarioService.logar(usuario).subscribe((res) => {
      console.log(res);
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
