import { Component, OnInit } from '@angular/core';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-myfriend',
  templateUrl: './myfriend.component.html',
  styleUrls: ['./myfriend.component.css']
})
export class MyfriendComponent implements OnInit {

  userId: number

  token: any


  friend: any[]
  
  isFriend: boolean

  constructor(private userService: UserService,  private dataTransfer: DataTransferService) { }

  ngOnInit(): void {
    this.token = this.dataTransfer.storeToken.getValue()
    console.log(this.token)
    if (this.token) {
      this.userService.getUsers().subscribe(value=>{
        console.log(value)
        this.dataTransfer.storeUsers.next(value)
        console.log(this.dataTransfer.storeUsers.getValue());
      })
      this.userId = this.dataTransfer.storeCurrentUser.getValue().id
      console.log(this.userId)

      let friend: any[] = []
      this.userService.getFriends(this.userId).subscribe(value => {
          console.log(value);
          value.map(value => {
            let myFriend = {
              id: 0,
              name: '',
              userId: 0,
              friendId: 0
            }
            myFriend.id = value.id
            myFriend.userId = value.userId
            myFriend.friendId = value.friendId
            for(let i of this.dataTransfer.storeUsers.getValue())
            {
              if(i.id === value.friendId){
                myFriend.name = i.name
              }
            }
            console.log(myFriend)
            friend.push(myFriend)
          })
        console.log(friend)
        this.friend = friend
        }
      )
      console.log(this.friend)
    }
  }

}
