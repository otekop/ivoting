import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userData: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {
    this.userData = this.formBuilder.group({
      email: [''],
      password: ['']
    })
  }

  login(): void {

    this.userService.loginUser(this.userData.value).subscribe(
      (res)=>{
        this.userService.saveToken(res.idToken);
        this.userService.getUser().subscribe(
          (res)=>{
            this.userService.saveUser(res);
            // get authority from response
            const authority = res.authority;
            // redirect based on authority
            this.redirectUser(authority);
          },
          (error)=>{
            console.warn(error);
          }
        )
      }
    )
  }

  redirectUser(authority:string){
    if(authority=="ADMIN"){
      this.router.navigate(['/candidate']);
    }else if(authority=="VOTER"){
      this.router.navigate(['/candidate']);
    }else if(authority=="CANDIDATE"){
      this.router.navigate(['/candidate']);
    }
  }

  ngOnInit(): void {
  }

}
