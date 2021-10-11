import { Component, OnInit, ViewChild } from '@angular/core';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { PositionService } from '../services/position.service';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent implements OnInit {

  positions: any;

  positionName!: string;

  @ViewChild("confirmPositionDeletion")
  public readonly confirmPositionDeletion!:SwalComponent;

  constructor(
    private positionService: PositionService
  ) { }

  addPosition() {
    const data = {
      name : this.positionName,
      university: JSON.parse(localStorage.getItem('user') + "").universityName
    }

    this.positionService.save(data).subscribe(
      (res)=>{
        this.positions.push(res);

        this.resetPosition();
      },
      (err)=>{
        console.log(err);
      }
    )
  }

  deletePosition(id:number){
    this.positionService.delete(id).subscribe(
      ()=>{
        this.confirmPositionDeletion.fire();
        this.ngOnInit();
      },
      (err)=>{
        console.log(err);
      }
    )
  }

  resetPosition(){
    this.positionName = '';
  }

  ngOnInit(): void {

    this.positionService.getAll().subscribe(
      (res) => {
        this.positions = res;
      },
      (err) => {
        console.log(err);
      }
    )

  }

}
