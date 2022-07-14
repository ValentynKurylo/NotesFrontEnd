import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../models/user";
import {ActivatedRoute, Router} from "@angular/router";
import { DataTransferService } from 'src/app/services/data-transfer.service';

@Component({
  selector: 'app-one-user',
  templateUrl: './one-user.component.html',
  styleUrls: ['./one-user.component.css']
})
export class OneUserComponent implements OnInit {

  @Input()
  user: User

  token: any


  constructor(private router: Router, private activateRoute: ActivatedRoute,  private dataTransfer: DataTransferService) { }

  ngOnInit(): void {
  }

  goToUserDetails() {
    this.token = this.dataTransfer.storeToken.getValue()
    if (this.token) {
      console.log(this.user.id, this.user.email)
      this.router.navigate([this.user.id], {relativeTo: this.activateRoute, state: this.user})
    } else {
      alert('You need to login!')
    }
  }
}
