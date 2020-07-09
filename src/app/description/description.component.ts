import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'

import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {

  constructor(private data:DataService,private service:SharedService) { }

  cid:any 
  typ:any

  resp:Object
  respBoolean:boolean = false

  ngOnInit() {

    var resp

    this.data.classdetails({'session_key':sessionStorage.getItem('user'),
                             'cid':sessionStorage.getItem('cid'),
                              'typ':sessionStorage.getItem('typ')             
  }).subscribe( 
    data => resp = data,
    (err) => console.log(err),
    () => this.succ(resp)
  )
  }

  //time converter
  tConvert (time) {
    // Check correct time format and split into components
    time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
  
    if (time.length > 1) { // If time format correct
      time = time.slice (1);  // Remove full string match value
      time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return time.join (''); // return adjusted time or original string
  }

  succ(resp)
  {
    this.cid = sessionStorage.getItem('cid')
    this.book_data['trainer_name']=this.cid
    this.typ = sessionStorage.getItem('typ')
    sessionStorage.removeItem('cid')
    sessionStorage.removeItem('typ')
    if(resp.code != 200)
    {
alert(resp.message)
    }
    this.respBoolean = true
      resp.body['review_count'] = Object.keys(resp.body.feedback).length;
      console.log(resp.body)
    this.resp = resp.body
 
  }


  buy()
  {
    var resp
    this.data.fbookclass({'session_key':sessionStorage.getItem('user'),'cid':this.cid}).subscribe(
      data => resp = data,
      (err) => console.log(err),
      () => this.sucresp(resp)
    )
  }


  sucresp(resp)
{
if(resp.code == 200)
{
  alert('Succesfully booked')
  this.service.coinEvent.emit(resp.coins)
  
}
else {
  alert(resp.message)
}
}


  openlink(link)
  {
    window.open(link)
  }



  // refresh()
  // {
  //   var resp

  //   this.data.classdetails({'session_key':sessionStorage.getItem('user'),
  //                            'cid':sessionStorage.getItem('cid'),
  //                             'typ':sessionStorage.getItem('typ')             
  // }).subscribe( 
  //   data => resp = data,
  //   (err) => console.log(err),
  //   () => this.succ(resp)
  // )
  // }



  // book class part
  bookclasslist:boolean = true
  bookclass: boolean = false

  class_timings:Object

  //get the hours to book
  get_class_hours()
  {
    var resp
    this.data.user_weektable({'session_key':sessionStorage.getItem('user'),'trainer':this.resp['username']}).subscribe(
      data => resp = data,
      (err) => console.log(err),
      () => {
        this.bookclass = true;
        this.bookclasslist = false;

        this.class_timings = resp.data;
        console.log(resp.data.MON)
      }
    )
  }

  //open last detail booking part
  book(day,time)
  {
    var resp
    console.log(day,time)
    this.book_data['day'] = day
    this.book_data['date'] = this.day_to_date(day)
    this.book_data['hour'] = time

    //load trainer details

    this.data.get_trnr_dtls(this.cid).subscribe(
      data => resp = data,
      (err) => { alert(err.error.message);},
      () => {
            this.trnr_dtls = resp.data
            console.log(resp.data)
            this.bookclass = false
            this.bookclassdetail = true
      }
      
    )
  }


  //booking the class
  bookclassdetail:boolean = false
  trnr_dtls:Object
  book_data:Object={
    session_key:sessionStorage.getItem('user'),
    day:'',
    hour:'',
    trainer_name:'',
    date:''
  }



  host_meeting()
  {
    var resp
    this.data.host_meeting(this.book_data).subscribe(
      data => resp = data,
      (err) => {alert(err.error.message)},
      () => {
        alert('Successfully boked,Please got to dashbord to find meeting detials')
      }
    )
  }





  //function to get the date for the day
  day_to_date(day)
  {

    var l = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    
    var k=l.indexOf(day)
    
    var myDate = new Date()
    var n = myDate.getDay()
    console.log('day'+day+'k='+k+'mydate='+myDate)
    console.log(k,n)
  if(k<n)
  {
  n =new Date( myDate.setDate(myDate.getDate() + ((k+7)-n)));
  }
  else if(k>n)
  {
  n = new Date( myDate.setDate(myDate.getDate() + (k-n)));
  }
  else 
  {
  n = myDate
  }
  
  return n
  }

}

