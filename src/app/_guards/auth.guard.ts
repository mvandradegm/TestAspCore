import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('currentUser')) {
            // logado, então retorne verdadeiro
            return true;
        }

        // não está logado, então redirecione para a página de login com o URL de retorno
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}