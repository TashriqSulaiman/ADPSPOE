import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private httpClient: HttpClient) {}

saveUser(inputData: object){

  return this.httpClient.post('http://localhost:3000/api/users/login', inputData);
}

}
