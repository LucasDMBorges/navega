import { Injectable } from '@angular/core';
import { RetornoMock, Usuario } from '../shared/models/usuario.model';
import { Router } from '@angular/router';
import { Observable, of, tap } from 'rxjs';

export const user = {
  email: 'lucas.dean@navega.com',
  senha: '1234',
};

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor(private router: Router) {}

  logar(usuario: Usuario): Observable<any> {
    return this.mockUsuarioLogin(usuario).pipe(
      tap((resposta) => {
        if (!resposta.sucesso) return false;
        else {
          localStorage.setItem(
            'token',
            btoa(JSON.stringify('TokenQueSeriaGeradoPelaAPI'))
          );
          localStorage.setItem('usuario', btoa(JSON.stringify(usuario)));
          this.router.navigate(['dashboard']);
          return;
        }
      })
    );
  }

  private mockUsuarioLogin(usuario: Usuario): Observable<RetornoMock> {
    console.log(usuario);
    let retornoMock: RetornoMock = {
      sucesso: false,
      usuario: {
        email: '',
        senha: '',
      },
      token: '',
    };
    if (usuario.email === user.email && usuario.senha == user.senha) {
      retornoMock.sucesso = true;
      retornoMock.usuario = usuario;
      retornoMock.token = 'TokenQueSeriaGeradoPelaAPI';
      return of(retornoMock);
    }
    retornoMock.sucesso = false;
    retornoMock.usuario = usuario;
    return of(retornoMock);
  }

  deslogar() {
    localStorage.clear();
    this.router.navigate(['login']);
  }

  obterUsuarioLogado() {
    const usuario = localStorage.getItem('usuario');
    return usuario;
  }

  logado(): boolean {
    return localStorage.getItem('token') ? true : false;
  }
}
