import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { BookclasspopupComponent } from '../bookclasspopup/bookclasspopup.component';
import { Router } from '@angular/router';
import { DataService } from '../data.service'


@Component({
  selector: 'app-scheduleclass',
  templateUrl: './scheduleclass.component.html',
  styleUrls: ['./scheduleclass.component.scss']
}) 
export class ScheduleclassComponent implements OnInit {

  constructor(private dialog:MatDialog,private router:Router, private data:DataService) { }
// get trainer details first
trnrdtls

//trainer details rest api response
trnresp:Object
  ngOnInit() {
    this.data.trainer().subscribe(
      data => this.trnresp = data,
      (err) => console.log(err),
      () => this.trnrsucc(this.trnresp)
    )
  }
  onCreateBook(){
    sessionStorage.setItem('level',this.trnrdtls.level)
    this.dialog.open(BookclasspopupComponent,{data:{'typ':this.trnrdtls.level}})
  }
  btnClick=function() {
    this.router.navigate('/buyclassroom');
};


//trainer details success function
trnrsucc(resp)
{
  if (resp.code == 200)
  {
this.trnrdtls = resp.data
  }
  else{
    alert(resp.message)
  }

}
}
