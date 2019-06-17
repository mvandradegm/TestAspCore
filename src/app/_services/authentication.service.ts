import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) { }

    login(email: string, password: string) {
        return this.http.post<any>(`${config.apiUrl}/users/authenticate`, { email: email, password: password })
            .pipe(map(user => {
                // login bem-sucedido se houver um token jwt na resposta
                if (user && user.token) {
                    // armazenar detalhes do usuário e token jwt no armazenamento local para manter o usuário logado entre as atualizações da página
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }

                return user;
            }));
    }

    logout() {
        // remover usuário do armazenamento local para fazer logout do usuário
        localStorage.removeItem('currentUser');
    }
}