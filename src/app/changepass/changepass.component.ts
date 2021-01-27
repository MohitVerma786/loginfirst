import { Component, OnInit } from '@angular/core';
import {changepass} from '../classes/changepass';
import {ApiService} from '../services/api.service'
import {Router} from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
@Component({
  selector: 'app-changepass',
  templateUrl: './changepass.component.html',
  styleUrls: ['./changepass.component.css']
})
export class ChangepassComponent implements OnInit {
  auth: string;
  constructor(private _ApiService: ApiService, public router: Router) { }

  ngOnInit(): void {
    this.auth = new BehaviorSubject<string>(JSON.parse(localStorage.getItem('userInfo'))).value['token'];
  }
  chpass = new changepass();
  confirmpass = '';
  onSubmit(){
    var passdata = new changepass();
    passdata.oldpassword = this.chpass.oldpassword;
    passdata.newpassword = this.chpass.newpassword;
    if(passdata.newpassword == this.confirmpass)
    {
    this._ApiService.changepass(passdata,this.auth)
    .subscribe(
      (data)=>
      {
        alert(data.message);
        this.chpass.oldpassword = '';
        this.chpass.newpassword = '';
        this.confirmpass = '';
      },
      (error: HttpErrorResponse )=>
      {
        alert(error.error.message);
        this.chpass.oldpassword = '';
        this.chpass.newpassword = '';
        this.confirmpass = '';
      },
      ()=>
      {
        console.log("complete");
      }
    );
    }else{
      alert("confirm password not matched");
      this.chpass.newpassword = '';
      this.confirmpass = '';
    }
  }
}
