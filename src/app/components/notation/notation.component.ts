import { Component, Input, OnInit } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
import { Notation } from 'src/app/models/notation';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import {NotationService} from '../../services/notation.service'

@Component({
  selector: 'app-notation',
  templateUrl: './notation.component.html',
  styleUrls: ['./notation.component.css']
})
export class NotationComponent implements OnInit {
  
  token: any

  id: number

  notation1: Notation

  notation = {name: '', startDate: '', endData: '', text: '', public: false, status: '', userId: 0}

  constructor(private NotationService: NotationService, private router: Router, private activateRoute: ActivatedRoute,  private dataTransfer: DataTransferService) {
    this.activateRoute.params.subscribe(value=>{
      this.id = value['id']
    })
  }

  ngOnInit(): void {
    this.token = this.dataTransfer.storeToken.getValue()
    this.NotationService.getNotationById(this.id).subscribe(value=>{
      this.notation1 = value
      console.log(this.notation1)
      this.notation.name = this.notation1.name
      this.notation.text = this.notation1.text
      this.notation.startDate = this.notation1.startDate
      this.notation.endData = this.notation1.endData
      this.notation.public = this.notation1.public
      this.notation.status = this.notation1.status
      this.notation.userId = this.notation1.userId
    })
  }

  Save() {
    console.log(this.id)
    console.log(this.notation)
    this.NotationService.putNotation(this.id, this.notation).subscribe(value=>{
      console.log(value)
    })
    alert('Your notation was updated')
  }

  Delete() {
    this.NotationService.deleteNotation(this.id).subscribe(value =>{
      console.log(value);
    })
    alert('Your notation was deleted')
  }
}
