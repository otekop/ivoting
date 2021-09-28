import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CandidatesService } from '../services/candidates.service';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {

  candidates : any;

  constructor(
    private route:ActivatedRoute,
    private candidateService:CandidatesService
  ) { }
  
  approve(candidate:any){
    candidate.status = "APPROVED";

    this.candidateService.changeState(candidate).subscribe(
      (res)=>{
        this.ngOnInit();
      },
      (err)=>{
        console.log(err);
      }
    )
  }

  reject(candidate:any){
    candidate.status = "REJECTED";

    this.candidateService.changeState(candidate).subscribe(
      (res)=>{
        this.ngOnInit();
      },
      (err)=>{
        console.log(err);
      }
    )
  }

  suspend(candidate:any){
    candidate.status = "PENDING";

    this.candidateService.changeState(candidate).subscribe(
      (res)=>{
        this.ngOnInit();
      },
      (err)=>{
        console.log(err);
      }
    )
  }

  ngOnInit(): void {

    // this.candidateService.getAllByUniversity(this.route.snapshot.paramMap.get('id')+"").subscribe(
    //   (res)=>{
    //     this.candidates = res;
    //     console.log(res);
    //   },
    //   (err)=>{
    //     console.log(err);
    //   }
    // )

    this.candidateService.getAll().subscribe(
      (res)=>{
        this.candidates = res;
      },
      (err)=>{
        console.log(err);
      }
    )
  }

}
