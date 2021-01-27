import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import {sendlogindata} from '../classes/sendlogindata';
import { changepass } from '../classes/changepass';
@Injectable()
export class ApiService{
    constructor(private httpclient: HttpClient){}
    post(logindata: sendlogindata): Observable<any>{
        return this.httpclient.post("https://staging.pronnel.com/pronnel/user/login",logindata)
    }
    changepass(pass: changepass,token : string): Observable<any>{
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json').set('Authorization', token);
        // var headers: Headers = new Headers({
        //     'Content-Type': 'application/json',
        //     'Authorization': token,
        // });
        return this.httpclient.post<any>("https://staging.pronnel.com/pronnel/user/changepassword",pass,{headers: headers})
    }
}