import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    if(this.username === 'manpreet' && this.password === 'admin'){
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }

  }
  constructor(private router: Router) { }

  ngOnInit() {
  }

}
