import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-bookclasspopup',
  templateUrl: './bookclasspopup.component.html',
  styleUrls: ['./bookclasspopup.component.scss']
}) 
export class BookclasspopupComponent implements OnInit {

  // dates: string[] = [
  //   '04/Dec/2019','05/Dec/2019','06/Dec/2019','07/Dec/2019','08/Dec/2019','09/Dec/2019'
  // ];

//   times: string[] = [
//               '4:00 PM','5:00 PM','6:00 PM','7:00 PM','8:00 PM','9:00 PM'
//   ];
  languages: string[] = [
    'English','Kannada','Tamil','Hindi','Bengali','Assamese'
];
  constructor(private router:Router,private data:DataService,private service:SharedService, private dialogRef: MatDialogRef<BookclasspopupComponent>) { }


  //response object
  resp:any
  //to store the date that is selected
  date:any=null
  //time free to book class
  times:any
  //variable to store the time that user has selected
  tme:any=null
  //subject
  sub=''
  //topic
  tpc=''
  //description
  dcp=''
  //language
  lang=''
  //free class booking response
  bresp
  //image url input
  img='https://www.classfly.in/assets/img/vcard.jpeg'
  ngOnInit() {
    //if type is free, get the dates and times at once
this.data.timetable().subscribe(
  data => this.resp = data,
  (err) => console.log(err),
  // () => this.freesuc(this.resp)   //since the succes function has nothing to do
)


//if the type is beginer, get the dates and then get the time free.
  }



  //free succes response
  freesuc(resp)
  {

  }

  //free class date and time handled
  
  selected(ev:any) {
    let data = ev.source.selected.viewValue;
    //the selected date
    this.date = data
    //list of hours in the day available for booking the class
    
    this.times = ev.source.selected.value;
    // var l=[]
    // for(var i in x)
    // {
    //   if(i)
    // }
  }

  //to record the time the user have selected, after selecting the date
selectdate(tme)
{
this.tme = tme
}

//selected language
selectlang(ev:any)
{
  this.lang = ev.source.selected.value
  console.log(this.lang)

}



//book free classes
book()
{
//validate date , time , subject , topic , langauge
if (this.sub == '' || this.tpc == '' || this.date == null || this.tme == null || this.lang == '' || this.dcp == '')
{
  console.log(this.date,this.tme,this.lang,this.sub,this.dcp,this.tpc)
  alert('Please fill in all the feilds')
  return
}

var bookform = {
  'session_key':sessionStorage.getItem('user'),
  'tid':sessionStorage.getItem('tid'),
  'sub':this.sub,
  'tpc':this.tpc,
  'dcp':this.dcp,
  'date':this.date,
  'tme':this.tme,
  'lang':this.lang
}

if(sessionStorage.getItem('level')!= 'trainer') 
{
//book the class
this.data.bookfreeclass(bookform).subscribe(
  data => this.bresp = data,
  (err) => console.log(err),
  () => this.bksucc(this.bresp)
)
}
else
{
  bookform.date=bookform.date.split(' ')[1]
  this.data.bookpaidclass(bookform).subscribe(
    data => this.bresp = data,
    (err) => console.log(err),
    () => this.bksucc(this.bresp)
  )
}
}
//succes from booking class
bksucc(resp)
{
  if(resp.code == 200)
  {
    this.service.coinEvent.emit(resp.coins)
    this.router.navigate(['dash'])
    this.dialogRef.close()
   
  }
  else
  {
    alert(resp.message)
  }
}
}
