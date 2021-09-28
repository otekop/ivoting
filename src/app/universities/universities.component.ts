import { Component, OnInit, ViewChild } from '@angular/core';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { UniversityService } from '../services/university.service';

@Component({
  selector: 'app-universities',
  templateUrl: './universities.component.html',
  styleUrls: ['./universities.component.css']
})
export class UniversitiesComponent implements OnInit {

  universities:any;

  universityName!:string;

  universityCode!:string;

  @ViewChild('confirmUniversityAddition') 
  public readonly confirmUniversityAddition!:SwalComponent;

  constructor(
    private universityService:UniversityService
  ) { }

  addUniversity(){
    const data = {
      name : this.universityName,
      code : this.universityCode
    }

    this.universityService.save(data).subscribe(
      (res)=>{
        this.universities.push(res);
        this.confirmUniversityAddition.fire();
        this.clearForm();
      },
      (err)=>{
        console.log(err);
      }
    )
  }

  clearForm(){
    this.universityName = '';
    this.universityCode = '';
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
