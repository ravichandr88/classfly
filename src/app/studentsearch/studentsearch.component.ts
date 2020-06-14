import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studentsearch',
  templateUrl: './studentsearch.component.html',
  styleUrls: ['./studentsearch.component.scss']
})
export class StudentsearchComponent implements OnInit {
  responses = 
  [{tname: 'Ravi Chan',sub: 'Python',tpc:'Object-Oriented',lang:'English',date:'05/Jan/55',time:'05:60 PM'},
  {tname: 'Anix Ahmed',sub: 'Python',tpc:'Object-Oriented',lang:'English',date:'05/Jan/55',time:'05:60 PM'},
  {tname: 'Anix Ahmed',sub: 'Python',tpc:'Object-Oriented',lang:'English',date:'05/Jan/55',time:'05:60 PM'},
  {tname: 'Anix A',sub: 'Python',tpc:'Object-Oriented',lang:'English',date:'05/Jan/55',time:'05:60 PM'},
  {tname: 'Anix A',sub: 'Python',tpc:'Object-Oriented',lang:'English',date:'05/Jan/55',time:'05:60 PM'},
  {tname: 'Anix A',sub: 'Python',tpc:'Object-Oriented',lang:'English',date:'05/Jan/55',time:'05:60 PM'},
  {tname: 'Anix A',sub: 'Python',tpc:'Object-Oriented',lang:'English',date:'05/Jan/55',time:'05:60 PM'},
  {tname: 'Anix A',sub: 'Python',tpc:'Object-Oriented',lang:'English',date:'05/Jan/55',time:'05:60 PM'},
  {tname: 'Anix A',sub: 'Python',tpc:'Object-Oriented',lang:'English',date:'05/Jan/55',time:'05:60 PM'},
];

  constructor() { }
  

  ngOnInit() {
  }

}
