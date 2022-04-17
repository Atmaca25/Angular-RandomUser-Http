import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { RandomUser } from '../models/RandomUser';

@Injectable({
  providedIn: 'root'
})
export class RandomUserService {
  apiUrl = "https://randomuser.me/api/";
  constructor(private httpClient: HttpClient) {

   }
   GetRandomUser(){
     return this.httpClient.get<RandomUser>(this.apiUrl);
   }
}