import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { VoteService } from '../services/vote.service';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  voterData: any;

  candidatesSelection: any;

  candidateChoice: any;

  candidateChoiceList: Array<number> = [];

  positions: any;

  activePosition: any;

  position = 0;

  lowerLimit = false;

  endOfList: boolean = false;

  user:any;

  positionDTO = {
    position: "President",
    university: JSON.parse(localStorage.getItem('user') + "").universityName
  }

  constructor(
    private voteService: VoteService,
    private userService: UserService
  ) { }

  next() {

    this.candidateChoiceList.push(Number(this.candidateChoice));

    console.log(this.candidateChoiceList);

    if (this.position == this.positions.length - 1) {
      console.log("The end of the list");
      this.endOfList = true;
    } else {
      this.position += 1;
    }

    this.activePosition = this.positions[this.position];

    this.positionDTO = {
      position: this.activePosition,
      university: JSON.parse(localStorage.getItem('user') + "").universityName
    }

    this.voteService.loadVoteData(this.positionDTO).subscribe(
      (res) => {
        this.voterData = res;
      },
      (err) => {
        console.log(err);
      }
    )
  }

  submitVote(){

    const data = {
      userId:this.userService.getUserFromStorage()?.id,
      candidates:this.candidateChoiceList
    }

    console.log(data);

    this.voteService.vote(data).subscribe(
      (res)=>{
        console.log(res);

        this.userService.updateUserToVotedInStorage();
      },
      (err)=>{

      }
    )

  }


  ngOnInit(): void {

    this.voteService.loadPositions(JSON.parse(localStorage.getItem('user') + "").universityName).subscribe(
      (res) => {
        this.positions = res;
        this.activePosition = this.positions[this.position];
        this.positionDTO = {
          position: this.activePosition,
          university: JSON.parse(localStorage.getItem('user') + "").universityName
        }
        this.voteService.loadVoteData(this.positionDTO).subscribe(
          (res) => {
            console.log(res);
            this.voterData = res;
          },
          (err) => {
            console.log(err);
          }
        )
      },
      (err) => {

      }
    );

    this.user = this.userService.getUserFromStorage();




  }

}
