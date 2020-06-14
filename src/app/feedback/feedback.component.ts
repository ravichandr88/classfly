import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialog } from '@angular/material';
import {FeedbackpopupComponent} from 'src/app/feedbackpopup/feedbackpopup.component';
import {DescriptionComponent } from 'src/app/description/description.component';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  constructor(private data:DataService, private router:Router,private dialog:MatDialog) { }

  inresp:Object
  ngOnInit() {
    //if(sessionStorage.getItem('user') == null)
    //{
      //this.router.navigate([''])
    //}

    this.data.feedabackdetails().subscribe(
      data => this.inresp = data,
      (err) => console.log(err),
      ()=> this.insuc(this.inresp)
    )
  }
//suucess function fromm getting the user feedback classes id's

insuc(resp)
{
  if(resp.code==200)
  {
    if (resp.data == 0)
    {
      this.router.navigate([''])
      sessionStorage.setItem('feed','done')
    }
    this.inresp = resp.data
    

  }
  else
  {
    alert('Please login')
    this.router.navigate([''])
  }
}


  rate = 0
  fdbck = ''
  trnsc = 0

  rating(i)
  {
    this.rate = i
  }

resp
  // save(id)
  // {
  //   //set tsid in session and call dialog popup
  //    sessionStorage.setItem('tsid', id)
  //    this.onCreateFeed()
  //   if(this.rate == 0)
  //   {
  //     alert('Please provide rating,It cannot be Zero')
  //     return
  //   }
  //   var f ={
  //     'session_key':sessionStorage.getItem('user'),
  // 'trnsc':this.trnsc,
  //  'feedback':this.fdbck,
  //  'rating':this.rate
  //           }

  //   this.data.feedback(f).subscribe(
  //     data => this.resp = data,
  //     (err) => console.log(err),
  //     () => this.succs(this.resp)
  //   )
  // }


//   succs(resp)
//   {
// if(resp.code==200)
// {
// // this.router.navigate([''])
// this.ngOnInit()
// }
  // }


  onCreateFeed(id){
    sessionStorage.setItem('tsid',id)
  const popup = this.dialog.open(FeedbackpopupComponent);
    popup.afterClosed().subscribe(
      result => {
        this.ngOnInit()
      }
    )
  }
  onCreateDesc(){
    this.dialog.open(DescriptionComponent);
  }
}

