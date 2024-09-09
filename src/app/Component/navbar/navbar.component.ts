import { Component } from '@angular/core';
import { LoginService } from '../../../services/login.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; 

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule], 
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  public loggedIn = false;

  username: string | null = null;
  
  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {
    this.loggedIn = this.loginService.isLoggedIn();
    this.username = this.loginService.getUsername();
  }
  
  logout() {
    this.loginService.logout();
    this.loggedIn = false;
    this.username = null; 
    this.router.navigate(['/login']);
  }
}
