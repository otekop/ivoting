import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {

  candidates = [
    {
      "name":"Yegon",
      "university":"Maseno",
      "post":"SG"
    },
    {
      "name":"Oteko",
      "university":"Maseno",
      "post":"SG"
    },
    {
      "name":"Ronny",
      "university":"Maseno",
      "post":"SG"
    },
    {
      "name":"Dan",
      "university":"Maseno",
      "post":"President"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
