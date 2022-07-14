import { Component, Input, OnInit, Output } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
import { Notation } from 'src/app/models/notation';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { NotationService } from 'src/app/services/notation.service';

@Component({
  selector: 'app-my-notations',
  templateUrl: './my-notations.component.html',
  styleUrls: ['./my-notations.component.css']
})
export class MyNotationsComponent implements OnInit {

  token: any

  userId: number

  notations: Notation[]

  constructor(private notationService: NotationService, private dataTransfer: DataTransferService, private router: Router, private activateRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.token = this.dataTransfer.storeToken.getValue()
    console.log(this.token)
    if (this.token.length > 1) {
      console.log('kjkkhkhkjk')
      this.userId = this.dataTransfer.storeCurrentUser.getValue().id
      this.notationService.getNotationByUserId(this.userId).subscribe(value => {
        console.log(value)
        this.notations = value
        if (value.length > 0) {
          this.notations.map(value => {
            value.startDate = value.startDate.slice(0, 10)
            value.endData = value.endData.slice(0, 10)
          })
        }
      })
    }

  }

}
