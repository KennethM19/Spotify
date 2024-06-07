import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@modules/auth/services/auth.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent implements OnInit {
  formLogin: FormGroup = new FormGroup({});
  loginError: string | null = null;
  constructor(private authService: AuthService, private cookie:CookieService, private router:Router) {}
  ngOnInit(): void {
    this.formLogin = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(12),
      ]),
    });
  }

  sendLogin(): void {
    const { email, password } = this.formLogin.value;
    this.authService.sendCredentials(email, password).subscribe(
      {
        next: (response) => {
          console.log('Sesión iniciada correctamente', response);
          const{tokenSession, data} = response;
          this.cookie.set('token', tokenSession,4,'/');
          this.router.navigate(['/login']);
          this.loginError = null;
        }, 
        error: (error) => {
          console.log('Error en la contraseña o usuario');
          this.loginError = 'Error en la contraseña o usuario';
        },
        complete: () => console.log('Completado'),
      }
    );
  }
}
