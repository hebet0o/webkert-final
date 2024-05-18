import { Component } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { error } from 'console';

 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  formGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })
 
  constructor(private authService: AuthService, private router: Router){}

  async login(){
    if(this.formGroup.invalid){
      console.log("Hibás felh/jelsz");
      return;
    }
    else{
      return this.authService.login(this.formGroup.get('email')?.value as string, this.formGroup.get('password')?.value as string).then(cred => {
        console.log(cred);
        if(cred.user){
          sessionStorage.setItem("currentUser", cred.user.uid)
          this.router.navigateByUrl('');
        }
        else{
          console.log("cred is null");
        }
      }).catch(error =>{
        console.error(error);
      });
    }
  }
  
}
