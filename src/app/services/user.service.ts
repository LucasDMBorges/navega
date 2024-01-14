import { Injectable } from '@angular/core';
import { RetornoMock, User } from '../shared/models/user.model';
import { Router } from '@angular/router';
import { Observable, of, tap } from 'rxjs';
import { USER } from '../pages/login-page/login-page-mock.const';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user = USER;

  constructor(private router: Router) {}

  login(user: User): Observable<any> {
    return this.mockUserLogin(user).pipe(
      tap((response) => {
        if (!response.sucess) return false;
        else {
          localStorage.setItem(
            'token',
            btoa(JSON.stringify('TokenQueSeriaGeradoPelaAPI'))
          );
          localStorage.setItem('user', btoa(JSON.stringify(user)));
          this.router.navigate(['dashboard']);
          return;
        }
      })
    );
  }

  private mockUserLogin(user: User): Observable<RetornoMock> {
    let responseMock: RetornoMock = {
      sucess: false,
      user: {
        email: '',
        password: '',
      },
      token: '',
    };
    if (user.email === this.user.email && user.password == this.user.password) {
      responseMock.sucess = true;
      responseMock.user = user;
      responseMock.token = 'TokenQueSeriaGeradoPelaAPI';
      return of(responseMock);
    }
    responseMock.sucess = false;
    responseMock.user = user;
    return of(responseMock);
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['login']);
  }

  getLoggedUser() {
    const user = localStorage.getItem('user');
    return user;
  }

  isLogged(): boolean {
    return localStorage.getItem('token') ? true : false;
  }
}
