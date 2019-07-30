import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password){
    if (username === 'manpreet' && password === 'admin'){
     return true;
    } else {
      return false;
    }
  }
}
