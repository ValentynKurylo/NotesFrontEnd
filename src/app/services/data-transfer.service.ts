import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  storeToken = new BehaviorSubject<string>('')

  storeCurrentUser = new BehaviorSubject<any>({})
  
  storeUsers = new BehaviorSubject<any>([])
  
  constructor() { }
}
