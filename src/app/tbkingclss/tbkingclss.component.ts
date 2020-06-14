import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormBuilder,Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-tbkingclss',
  templateUrl: './tbkingclss.component.html',
  styleUrls: ['./tbkingclss.component.scss']
}) 
export class TbkingclssComponent implements OnInit {

  constructor(private formBuilder : FormBuilder,private data : DataService, private router : Router) { }

response :Object
trnrdtls :Object
typ:number = 0

typ1:Object
dates

typ2:Object
date2:string
hour2



typ3:Object
dates3:any
hours3:any



sub=''
tpc=''
dcp=''
lang='English'
tme=0
date:Date

  ngOnInit() {

    if(!sessionStorage.getItem('user'))
    {
      this.router.navigate(['login'])
      return 
    }
   // if(!sessionStorage.getItem('feed'))
    //{
    //  this.router.navigate(['feedback'])
     // return
   // }
    // if(sessionStorage.getItem('user')){
    // this.data.trainer({'session_key':sessionStorage.getItem('user')}).subscribe(
    //   data => this.response = data,
    //   (err) => console.log(err),
    //   () => this.trnrdtlsuc(this.response)
    // )}
    // else{
    //   this.router.navigate(['login'])
    // }

  }

  trnrdtlsuc(trnr)
  {
    if (trnr.code==200)
    {
      this.trnrdtls={
            'tid':trnr.data.tid,
            'rating':trnr.data.rating,
            'level':trnr.data.level,
            'type':trnr.data.type
    }
    sessionStorage.setItem('tid',trnr.data.tid)
    if (trnr.data.rating<=3.5)
    {
      //Working to get the free dates nad hours for the free free trainers.
      this.typ = 1
      this.data.timetable(trnr.data.tid).subscribe(
        data => this.typ1 = data,
        (err) => console.log(err),
        () => console.log(this.typ1)
      )
    }
    else if(trnr.data.rating > 3.5 && trnr.data.level == 'entry')
    {
      //Working for getting the week dates that are available for the free trainers with rating >3.5 
      this.typ = 2
      this.data.weekdates().subscribe(
        data => this.typ2 = data,
        (err) => console.log(err),
        () => this.succrespns2(this.typ2)
      )
    }
    else{
//Trainer who has booked classroom and rating > 3.5
      this.typ = 3
      this.data.paiddates().subscribe(
        data => this.typ3 = data,
        (err) => console.log(err),
        () => this.sucdates3(this.typ3)
      )
    
    }

    //get the free dates for trainer, with typ number2

  console.log(JSON.stringify(this.trnrdtls))
    }
    else{
      alert(trnr.message)
    }
  }



  //function to refelct dates 
  datesfun(dats)
  {
    this.dates=dats
  }


  selected(ev:any) {
    // let target = event.source.selected._element.nativeElement;
    // let selectedData = {
    //   value: event.value,
    //   text: target.innerText.trim()
    // };
    let data = ev.source.selected.viewValue;
    this.date = data
    this.dates = ev.source.selected.value;
}

selectdate(tme)
{
this.tme = tme
}



//For triners with raitng more than 3.5 and students > 10,
//Type 2 trainers

//recievd the free dates
succrespns2(resp)
{
if (resp.code == 200)
{
console.log(resp.data)
}
else
{
  alert('Check your internet connection')
}
}

hours2:any
selected2(ev:any)
{
  var t = ev.source.selected.viewValue;
  // this.date = data
  var d  = ev.source.selected.value;
  this.date2 = d
  this.date = d
  //get the free hours of the date and trainer given
  this.data.dayhours(sessionStorage.getItem('tid'),d).subscribe(
    data => this.hours2 = data,
    (err) => console.log(err),
    () => this.succhours(this.hours2)
  )
}

selected2time(ev:any)
{
this.hour2 = ev.source.selected.value;
console.log(this.date2+'   '+this.hour2)
this.tme = ev.source.selected.value
}

succhours(resp)
{
  if(resp.code == 200)
  {
console.log(resp)
  }
  else
  {
    alert(resp.message)
  }
}


//Get the free dates and hours for the paid trainer with rating >3.5
sucdates3(resp)
{
  if(resp.code==200)
  {
    console.log(resp.data)
  }
  else
  {
    alert(resp.message)
  }
}


selected3(ev:any)
{
  console.log(ev.source.selected.viewValue,ev.source.selected.value[1])
  this.hours3=ev.source.selected.value[1]
  this.date = ev.source.selected.value[0][0]
}


selectedtme3(ev:any)
{
this.tme = ev.source.selected.value
}


bokingresp:Object



bookclass()
{
  var k={      
    'sub':this.sub,
    'tpc':this.tpc,
    'dcp':this.dcp,
    'lang':this.lang,
    'tme':this.tme,
    'date':this.date,
    'typ':this.typ,
    'session_key':sessionStorage.getItem('user'),
    'tid':sessionStorage.getItem('tid')
        }

      if(this.sub=='' || this.tpc=='' || this.dcp=='' || this.lang=='' || this.tme==0 )
      {
        alert('Please Fill in all the feilds')
        return
      }
    
if (this.typ == 1 || this.typ == 2)
{
  this.data.bookfreeclass(k).subscribe(
    data => this.bokingresp = data,
    (err) => console.log(err),
    () => this.succsbookng(this.bokingresp)
  )
}

  else if (this.typ == 3)
  {
    this.data.bookpaidclass(k).subscribe(
      data => this.bokingresp = data,
      (err) => console.log(err),
      () => this.succsbookng(this.bokingresp)
    )
}
}

suchost:Object

succsbookng(resp)
{
if(resp.code == 200)
{
  this.data.hostclass(resp.cid,resp.typ).subscribe(
    data => this.suchost = data,
    (err) => console.log(err),
    () => this.hostresp(this.suchost)
  )
}
else
{
  console.log(resp.message)
}
}


hostresp(resp)
{
  if(resp.code == 200)
  {
    alert('Class Hosted')
    this.router.navigate([''])
  }
  else
  {
    alert('Please try again later')
  }
}
}