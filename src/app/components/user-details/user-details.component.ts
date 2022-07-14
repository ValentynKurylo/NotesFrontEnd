import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../models/user";
import { Notation } from 'src/app/models/notation';
import {NotationService} from '../../services/notation.service'
import { DataTransferService } from 'src/app/services/data-transfer.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user: User

  userDetail: User

  id: number

  natations: Notation[]

  b: boolean

  lenghtN: number

  buttonValue: string

  isFriend: boolean

  friend = {
    userId: 0,
    friendId: 0
  }
  getFriend: {
    id: 0,
    userId: 0,
    friendId: 0
  }

  constructor(private UserService: UserService, private router: Router, private activateRoute: ActivatedRoute, private NotationService: NotationService, private dataTransfer: DataTransferService) {
   this.activateRoute.params.subscribe(params => {
      this.user = this.router.getCurrentNavigation()?.extras.state as User
      this.id = params['id']
    })

  }

  ngOnInit(): void {
    this.isFriend = false
    this.buttonValue = 'Show Notations'
    console.log('id', this.id)
    this.UserService.getUserById(this.id).subscribe(value => {
      console.log(value[0])
      this.userDetail = value[0]
    })
    this.UserService.getFriends(this.dataTransfer.storeCurrentUser.getValue().id).subscribe(value=>{
      value.map(v => {
        if(v.friendId == this.id){
          this.isFriend = true
          this.getFriend = v
        }
      })
    })
  }

  showNotation() {
    this.NotationService.getNotationByUserId(this.id).subscribe(value =>{
      console.log(value)
      this.natations = value
      this.natations.map(value => {
        value.startDate = value.startDate.slice(0, 10)
        value.endData = value.endData.slice(0, 10)
      })
      this.lenghtN = value.length
    })
    if(!this.b){
      this.b = true
      this.buttonValue = 'Show Notations'
      console.log(this.b)
    }
    else if(this.b){
      this.b = false
      this.buttonValue = 'Hide Notations'
      console.log(this.b)
    }
  }

  AddFriend() {
    let b = confirm('You really want to add this friend')
    if (b) {
      this.friend.userId = this.dataTransfer.storeCurrentUser.getValue().id
      this.friend.friendId = this.id
      this.UserService.postFriend(this.friend).subscribe(value => {
        console.log(value);
      })
    }
  }

  DeleteFriend() {
    let b = confirm('Are you sure?')
    if (b) {
      this.UserService.deleteFriend(this.getFriend.id).subscribe(value => {
        console.log(value);
      })
    }
  }
}


