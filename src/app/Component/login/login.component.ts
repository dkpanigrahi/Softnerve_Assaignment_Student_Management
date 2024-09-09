import { Component } from '@angular/core';
import { LoginService } from '../../../services/login.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  credentials = {
    email: '',
    password: ''
  };

  constructor(private loginService: LoginService, private router: Router) {}

  onSubmit() {
    this.loginService.dologin(this.credentials).subscribe(
      (response: any) => {
        console.log('Login successful', response);
        this.loginService.loginUser(response.jwtToken, response.username);
        this.router.navigate(['/home']);
      },
      (error) => {
        console.error('Login failed', error);
        alert('Invalid username or password');
      }
    );
  }
}
