import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { UniversityService } from '../services/university.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  universities:any;

  userData:any;

  @ViewChild("confirmRegister")
  public readonly confirmReg!:SwalComponent;

  constructor(
    private universityService:UniversityService,
    private formBuilder:FormBuilder,
    private userService:UserService,
    private router:Router
  ) { 
    this.userData = this.formBuilder.group({
      name:[''],
      admissionNumber:[''],
      universityName:[''],
      phoneNumber:[''],
      email:[''],
      password:['']
    });
  }

  register(){

    this.userService.register(this.userData.value).subscribe(
      (res)=>{
        this.router.navigate(['/login']);
        this.confirmReg.fire();
      },
      (err)=>{
        console.log(err);
      }
    )
  }

  ngOnInit(): void {

    this.universityService.getUniversities().subscribe(
      (res)=>{
        this.universities = res;
      },
      (err)=>{
        console.log(err);
      } 
    )
  }

}
