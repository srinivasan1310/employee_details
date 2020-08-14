import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-emp-login',
  templateUrl: './emp-login.component.html',
  styleUrls: ['./emp-login.component.scss']
})
export class EmpLoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getImage(){
    alert('Welcome');
  }

  loginBtn(){
    alert('Welcome to login');
  }

  googleSignIn(){
    alert('google');
  }
  facebookSignIn(){
    alert('facebook');
  }
  twitterSignIn(){
    alert('twitter');
  }

}
