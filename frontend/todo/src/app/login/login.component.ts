import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = 'manpreet';
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  handleLogin() {
    //console.log(this.username);
    if(this.hardcodedAuthenticationService.authenticate(this.username, this.password)){
      this.router.navigate(['welcome', this.username]);
      sessionStorage.setItem('authenticatedUser', this.username);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }

  }

  isUserLoggedIn(){
    // tslint:disable-next-line: prefer-const
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);
  }
  constructor(private router: Router,
              private hardcodedAuthenticationService : HardcodedAuthenticationService) { }

  ngOnInit() {
  }

}
