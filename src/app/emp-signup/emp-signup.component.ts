import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp-signup',
  templateUrl: './emp-signup.component.html',
  styleUrls: ['./emp-signup.component.scss']
})
export class EmpSignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getImage(){
    alert('Welcome');
  }

}
