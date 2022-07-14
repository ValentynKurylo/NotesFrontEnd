import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Notation } from '../models/notation';

@Injectable({
  providedIn: 'root'
})
export class NotationService {

  private url = "http://localhost:3000"

  constructor(private httpClint: HttpClient) { }

  getNotationByUserId(id: number): Observable<Notation[]>{
    return this.httpClint.get<Notation[]>(this.url + '/notation/userId/' + id)
  }
  postNotation(data: any): Observable<any>{
    return this.httpClint.post<any>(this.url + '/notation', data)
  }
  getNotationById(id: number): Observable<Notation>{
    return this.httpClint.get<Notation>(this.url + '/notation/' + id)
  }
  putNotation(id: number, body: any): Observable<any>{
    return this.httpClint.put<any>(this.url + '/notation/' + id, body)
  }
  deleteNotation(id: number): Observable<any>{
    return this.httpClint.delete<any>(this.url + '/notation/' + id)
  }
}
