import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { user } from '../../shared/models/user';
import { UserService } from '../../shared/services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  signUpForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    rePassword: new FormControl('')
  });

  constructor(private authService: AuthService, private userService: UserService, private router: Router){}


  onSubmit(){
    console.log(this.signUpForm.value);
    this.authService.register(this.signUpForm.get('email')?.value as string, this.signUpForm.get('password')?.value as string).then(cred => {
      console.log(cred);
      this.router.navigateByUrl('/login');
      const User: user = {
        id: cred.user?.uid as string,
        email: this.signUpForm.get('email')?.value as string,
        username: this.signUpForm.get('username')?.value as string,
        bookedTickets: new Array
      };
    this.userService.create(User).then(_ => {
      console.log("User added successfully!");
    }).catch(error => {
      console.error(error);
    })
    }).catch(error => {
      console.error(error);
    });

    
  }
}
