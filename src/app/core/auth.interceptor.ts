import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token'); // Récupère le token depuis le stockage local

    if (token) {
      // Clone la requête et ajoute le header Authorization
      request = request.clone({
        setHeaders: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
      });
    }

    return next.handle(request);
  }
}