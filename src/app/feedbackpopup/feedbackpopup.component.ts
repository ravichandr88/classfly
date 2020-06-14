import { Component, OnInit } from '@angular/core';
import {DataService } from '../data.service'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-feedbackpopup',
  templateUrl: './feedbackpopup.component.html',
  styleUrls: ['./feedbackpopup.component.scss']
})
export class FeedbackpopupComponent implements OnInit {

  constructor(private data:DataService,private dialogref: MatDialogRef<FeedbackpopupComponent>) { }

  commv=0
  contv=0
  tmngv=0
  commnts=''
  tsid:any=2
  resp:any

  ngOnInit() {
    if(sessionStorage.getItem('tsid'))
    {
      this.tsid=sessionStorage.getItem('tsid')
      sessionStorage.removeItem('tsid')
    }
  }
  
cmnt=''
  //upload the feedback
  print()
  {
    if(this.commv==0 || this.contv==0||this.tmngv==0)
    {
      // alert('Please provide rating')
      this.cmnt='Please fill in all feilds'
      return
    }
    this.data.feedback({'session_key':sessionStorage.getItem('user'),
    'tsid':this.tsid,
    'comm':this.commv,
    'cont':this.contv,
    'tmng':this.tmngv,
    'commts':this.commnts}).subscribe(
      data => this.resp =data,
      (err) => {},
      ()=> this.succfun(this.resp)
    )
  }

  succfun(resp)
  {
    if (resp.code == 200)
    {
      this.dialogref.close()
    }
    else
    {
      alert(resp.message)
    }
  }

  feed(i)
  {
    console.log(i)
    this.contv=i
  }

  comm(i)
  {
    this.commv=i
  }

  tmng(i)
  {
    this.tmngv=i
  }

}
