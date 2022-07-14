import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import {UserService} from '../../services/user.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  token: any

  currentUser: User

  data = {email: '', password: ''}



  constructor(private UserService: UserService, private dataTransfer: DataTransferService) {

  }

  ngOnInit(): void {

  }

  login(myForm: HTMLFormElement) {
    console.log(this.data)
    this.UserService.login(this.data).subscribe(value=>{
      console.log(value.accessToken)
      this.token = value.accessToken
      this.dataTransfer.storeToken.next(this.token)
    })
    this.UserService.getCurrentUser(this.data).subscribe(value =>{
      console.log(value[0])
      this.dataTransfer.storeCurrentUser.next(value[0])
    })
    alert('You were signed in')
  }
}
