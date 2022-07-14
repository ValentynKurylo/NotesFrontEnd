import { Injectable, ViewChild } from '@angular/core';
import {HttpClient, HttpClientModule, HttpEvent, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/user"
import { LoginComponent } from '../components/login/login.component';
import { DataTransferService } from './data-transfer.service';

@Injectable({
  providedIn: 'root'
})



export class UserService {

  private url = "http://localhost:3000"



  constructor(private httpClint: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.httpClint.get<User[]>(this.url + "/users")
  }
  getUserById(id: number): Observable<User[]> {
    return this.httpClint.get<User[]>(this.url + "/users/" + id)
  }
  postUser(data: any): Observable<any>{
    console.log('regisrt---', data)
    return this.httpClint.post(this.url + "/users", data)
  }
  login(data: any): Observable<any>{
    return this.httpClint.post(this.url + '/auth/login', data)
  }
  getUserByName(name: string, token: any): Observable<User[]>{
    console.log(token)
    return this.httpClint.get<User[]>(this.url + '/users/ByName/' + name, {
      headers: {
        'Authorization':  token,
       // "Access-Control-Allow-Headers": "*"
      }
    })
  }
  getCurrentUser(data: any): Observable<any>{
    return this.httpClint.post(this.url + '/auth/currentUser', data)
  }
  getFriends(id: number): Observable<any[]>{
    return this.httpClint.get<any[]>(this.url + '/friend/' + id)
  }
  postFriend(data: any): Observable<any>{
    return this.httpClint.post<any>(this.url + '/friend', data)
  }
  deleteFriend(id: number): Observable<any>{
    return this.httpClint.delete<any>(this.url + '/friend/' + id)
  }
}

