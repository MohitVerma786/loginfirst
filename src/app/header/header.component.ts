import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { loginData } from '../classes/logindata';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
    if((new BehaviorSubject<loginData>(JSON.parse(localStorage.getItem('userInfo'))).value) == null){
      this.router.navigate(['../login']);  
    }
  }
  logout(){
    localStorage.removeItem('userInfo');
    this.router.navigate(['../login']);
  }

}
