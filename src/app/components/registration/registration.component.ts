import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup } from '@angular/forms';
import {User} from "../../models/user";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user = {name: 'UserName', email: "Email@gmail.com", password: ""}
 
  users: User[];

  id1: number

  constructor(private UserService: UserService) { }

  ngOnInit(): void {
    this.UserService.getUsers().subscribe(value => {
      this.users = value
    })
  }

  Register(myForm: HTMLFormElement) {
    console.log(myForm['username'].value)
    console.log(this.user);
    this.UserService.postUser(this.user).subscribe(value => {
      console.log(value)
    })
    alert('You were registred')
  }

  
}
