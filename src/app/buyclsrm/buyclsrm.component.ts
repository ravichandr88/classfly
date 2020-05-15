import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { BuyclassdescpopComponent } from '../buyclassdescpop/buyclassdescpop.component';
import {MatDialog,MatDialogConfig} from '@angular/material';
import { isUndefined, isNull } from 'util';


@Component({
  selector: 'app-buyclsrm',
  templateUrl: './buyclsrm.component.html',
  styleUrls: ['./buyclsrm.component.scss']
})
export class BuyclsrmComponent implements OnInit {


resp2:any
  resp:any
tim:any
l=[0,1,2,3]

d={
  'MON':[],
  'TUE':[],
  'WED':[],
  'THU':[],
  'FRI':[],
  'SAT':[],
  'SUN':[]
}

  constructor(private data:DataService)
  {
    
  }
  ngOnInit() {
    this.data.weektable().subscribe(
      data=> this.resp =data,
      (err)=> console.log(err),
      () => {
        var x =this.resp
        this.d = x.data
      }
    )
  }

  hug()
  {
    // if(this.tim=='')
    // {
    // console.log('null')
    // }
    // else
    // {
    //   console.log(this.tim)
    // }
    // console.log(this.d)
    for(let j of ['MON','TUE','WED','THU','FRI','SAT','SUN'])
    {
      var m = []
      for(let i of this.retnum(this.d[j].length))
    {
      
      console.log(this.d[j][i])
      if ((!isUndefined(this.d[j][i])) &&  (this.d[j][i]!='')  )
      {
        m.push(this.d[j][i])
      }
    }
    this.d[j]=m
    }
    
    console.log(this.d)
    // return 
    this.d['session_key']=sessionStorage.getItem('user')
    this.data.update_table(this.d).subscribe(
      data => this.resp2 =data,
      (err)=> console.log(err),
      ()=>{}
    )
  }



  retnum(i)
  {
    var k = []
    var j=0
    while(j<i)
    {
      k.push(j)
      j+=1
    }
    return k
  }


}

//   constructor(private data:DataService,private router:Router,private dialog:MatDialog) { }

//   resp
//   details
//   ngOnInit() {
//    // if(sessionStorage.getItem('tid') == null)
//    // {
//   //    alert('Not a trainer')
//   //    this.router.navigate(['/'])
//   //  }
//     //else
//     // if(!sessionStorage.getItem('feed'))
//     //{
//      // alert('You cannot access until you give feedback')
//      // this.router.navigate(['/feedback'])
//    // }

//     this.data.buyclsdetails().subscribe(
//       data => this.resp = data,
//       (err) => console.log(err),
//       () => this.sucresp(this.resp)
//     )
//   }

//   sucresp(resp)
//   {
//     if(resp.code==200)
//     {
// this.details = resp.data
//     }
//     else
//     {
//       alert('Something went wrong,Please try again later')
//     }
//   }



//   buyresp

//   buy(id)
//   {
    
//   window.open("http://localhost:8000/api/buyclassroom/"+sessionStorage.getItem('tid')+'/'+id, "_blank");

//   }
//   onCreateDesc(){
//     this.dialog.open(BuyclassdescpopComponent)
//   }


// }
