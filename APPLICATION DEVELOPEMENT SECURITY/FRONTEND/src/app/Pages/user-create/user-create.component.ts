import { Component } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent {

  constructor(private userService: UserService) {}

  username!: string
  firstname!: string
  lastname!: string
  password!: string

  saveUser(){
    var inputData = {
      username: this.username,
      firstname: this.firstname,
      lastname: this.lastname,
      password: this.password,
    }

    this.userService.saveUser(inputData).subscribe({
      next: (res: any) => {
        console.log(res, 'response')
      },
      error: (err: any) => {
        console.log(err.error.errors, 'errors')
      }
    })

  }
}
