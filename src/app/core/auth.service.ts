import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { MOCK_USERS } from './users.mock';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  login(data: { email: string; password: string }): Observable<any> {
    const user = MOCK_USERS.find(
      u => u.email === data.email && u.password === data.password
    );

    if (user) {
      const token = 'faketoken_' + btoa(user.email + Date.now());
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      return of({ token, user });
    } else {
      return throwError(() => new Error('Identifiants incorrects'));
    }
  }

  register(data: { email: string; password: string }): Observable<any> {
    const user = MOCK_USERS.find(
      u => u.email === data.email && u.password === data.password
    );

    if (user) {
      const token = 'faketoken_' + btoa(user.email + Date.now());
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      return of({ token, user });
    } else {
      return throwError(() => new Error('Identifiants incorrects'));
    }
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getUser(): any {
    const data = localStorage.getItem('user');
    return data ? JSON.parse(data) : null;
  }
}
