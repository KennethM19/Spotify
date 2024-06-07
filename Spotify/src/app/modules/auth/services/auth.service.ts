import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { response } from 'express';
import { CookieService } from 'ngx-cookie-service';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly URL = environment.api
  constructor(private http:HttpClient, private cookie:CookieService) { }
  sendCredentials(email: string, password: string): Observable<any>{
    const body = {
      email,
      password
    }

    return this.http.post(`${this.URL}/auth/login`, body)
    .pipe(tap((response: any) => {
      const{tokenSession, data} = response
      this.cookie.set('token_service', tokenSession,4,'/')
    }))
    
  }
}
