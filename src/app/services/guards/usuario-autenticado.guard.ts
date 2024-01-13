import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { UsuarioService } from '../usuario.service';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  console.log(inject(UsuarioService).logado());
  return inject(UsuarioService).logado()
    ? true
    : inject(Router).createUrlTree(['/login']);
};
