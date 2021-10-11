import { Component, OnInit } from '@angular/core';
import { CandidatesService } from '../services/candidates.service';
import { PositionService } from '../services/position.service';
import { UserService } from '../services/user.service';
import { VoteService } from '../services/vote.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  resultSet: any;

  constructor(
    private voteService: VoteService,
    private userService: UserService
  ) { }

  ngOnInit(): void {

    this.voteService.loadResults(this.userService.getUserFromStorage()?.universityName).subscribe(
      (res)=>{
        this.resultSet = res;
      },
      (err)=>{
        
      }
    )

  }

}
