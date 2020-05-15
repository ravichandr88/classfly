import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.scss']
})
export class ComplaintComponent implements OnInit {


  report
  dcp

  constructor(private router:Router) { }

  ngOnInit() {
    //if(!sessionStorage.getItem('user'))
    //{
      //alert('Please login, before you submit your comlaint')
      //this.router.navigate(['login'])
    //}
    //if(!sessionStorage.getItem('feed'))
    //{
      //alert('Submit your feedback before you complain')
     // this.router.navigate(['feedback'])
    //}
  }


  print()
  {
    
  }
}
