import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup } from '@angular/forms';
import {ActivatedRoute, Router } from '@angular/router';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import {User} from "../../models/user";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[]

  data: any

  token: any

  id1: any

  user: User

  users1: User[]

  myForm1 = new FormGroup({
    name: new FormControl('default')
  });

  constructor(private UserService: UserService, private dataTransfer: DataTransferService, private router: Router, private activateRoute: ActivatedRoute) {
    this.token = dataTransfer.storeToken.getValue()
  }

  ngOnInit(): void {
    this.UserService.getUsers().subscribe(value => {
      this.users = value
      console.log(this.users)
    })
  }

  findUser(myForm: HTMLFormElement) {
    if(!this.token){
      return alert("You need login!!!")
    }
    console.log(this.data)

    this.UserService.getUserByName(this.data, this.token).subscribe(value=>{
      console.log(value)
      this.users1 = value
    })
  }
  Show() {
    if(!this.token){
      return alert("You need login!!!")
    }
    console.log(this.myForm1.value.name)
    this.id1 = Number(this.myForm1.value.name)
    console.log(typeof this.id1)
    this.UserService.getUserById(this.id1).subscribe(value=>{
      console.log(value[0])
      this.user = value[0]
    })
  }

  UserDetails() {
    this.router.navigate([this.user.id], {relativeTo: this.activateRoute, state: this.user})
  }
}
