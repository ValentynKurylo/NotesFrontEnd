import { Component, OnInit } from '@angular/core';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { NotationService } from 'src/app/services/notation.service';

@Component({
  selector: 'app-post-notation',
  templateUrl: './post-notation.component.html',
  styleUrls: ['./post-notation.component.css']
})
export class PostNotationComponent implements OnInit {

  token: any

  notation = {name: '', startDate: '', endData: '', text: '', public: false, status: '', userId: 0}

  constructor(private notationService: NotationService, private dataTransfer: DataTransferService) { }

  ngOnInit(): void {
  }

  Post(myForm: HTMLFormElement) {
    this.token = this.dataTransfer.storeToken.getValue()
    if (this.token) {
      this.notation.userId = this.dataTransfer.storeCurrentUser.getValue().id
      this.notationService.postNotation(this.notation).subscribe(value => {
        console.log(value)
      })
      alert('Your Notation was added')
    }
    else {
      alert('You need to login')
    }
  }
}
