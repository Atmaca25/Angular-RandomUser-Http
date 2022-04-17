import { Component, OnInit } from '@angular/core';
import { RandomUser, RandomUserInformation } from 'src/app/models/RandomUser';
import { RandomUserService } from 'src/app/services/random-user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  _randomUser:RandomUserInformation[];
  constructor(private randomUserService:RandomUserService) {

   }

  ngOnInit(): void {
    this.randomUserService.GetRandomUser().subscribe(response => {
      this._randomUser = response.results;
    },errorResponse => {
      console.log(errorResponse);
    });
  }

  changeRandomUser(){
    this.randomUserService.GetRandomUser().subscribe(response => {
      this._randomUser = response.results;
    },errorResponse => {
      console.log(errorResponse);
    });
  }
}
