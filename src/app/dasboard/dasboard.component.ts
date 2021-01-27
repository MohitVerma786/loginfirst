import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { loginData } from '../classes/logindata';
@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.css']
})
export class DasboardComponent implements OnInit {
  private user: BehaviorSubject<loginData>;
  userinfo : loginData;
  constructor() { }
  ngOnInit(): void {
    this.user = new BehaviorSubject<loginData>(JSON.parse(localStorage.getItem('userInfo')));
    this.userinfo = this.user.value;    
  }
  
}
