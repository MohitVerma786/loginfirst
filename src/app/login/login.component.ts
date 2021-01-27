import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {sendlogindata} from '../classes/sendlogindata';
import {ApiService} from '../services/api.service';
import {loginData} from '../classes/logindata';
import {Router} from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  islogging = false;
  issubmitting = true;
  public userInfo: Observable<loginData>;
  @Output() islogged: EventEmitter<any> = new EventEmitter();
  constructor(private _ApiService: ApiService, public router: Router) {}
  ngOnInit(): void {
    if((new BehaviorSubject<loginData>(JSON.parse(localStorage.getItem('userInfo'))).value) != null){
      this.router.navigate(['../']);  
    }
  } 
  loginvalue = new sendlogindata();
  onSubmit(){
    var ldata = new sendlogindata();
    ldata.email = this.loginvalue.email;
    ldata.password = this.loginvalue.password;
    ldata.client_id = this.loginvalue.client_id;
    this.islogging = true;
    this.issubmitting = false;
    console.log(ldata);
    return;   
    this._ApiService.post(ldata)
    .subscribe(
      (data)=>
      {
        localStorage.setItem('userInfo', JSON.stringify(data));
        this.router.navigate(['dashboard']);
      },
      (error : HttpErrorResponse)=>
      {
        alert(error.error.message);
        this.islogging = false;
        this.issubmitting = true; 
      },
      ()=>
      {
        this.islogging = false;
        this.issubmitting = true; 
      }
    );
  }


}
