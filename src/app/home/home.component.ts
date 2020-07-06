import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { DescriptionComponent } from '../description/description.component';
import { MatDialog } from '@angular/material';
import { LoginComponent } from 'src/app/login/login.component'
import { SharedService } from 'src/app/shared.service';
import { AlphaComponent } from '../alpha/alpha.component'
declare var openNavlogin: Function;
declare var alert: Function;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private data:DataService,private service:SharedService,private router : Router,private route: ActivatedRoute,private dialog:MatDialog) { }
 
 typo:string[]=['Paid','Free']
 typn:string[]=['Free','Paid']

  company:string=''
  designation:string=''
  city:string=''

 searchresp:Object
  
 
 ngOnInit() {
  // this.data.initialserach().subscribe(
  //   data => this.resp = data,
  //   (err) => this.dialog.open(AlphaComponent,{width: '250px',data:'Please check your internet connection'}),
  //   ()=>{
  //     if(this.resp[0].length==0&&this.resp[1].length==0)
  //     {
  //       this.mssg='No classes found'
  //     }
  //     else
  //     {
  //       this.mssg=''
  //     }
  //   }
  // )

  // this.sub = this.route.snapshot.params.val
  // if(this.sub != ''){
  // this.search()
  // }


  //call for new search algo
  this.data.searchp({city:this.city,company:this.company,designation:this.designation}).subscribe(
    data => this.searchresp = data,
    (err) =>  this.mssg =  'please check your connection',
    () => {

    }
  )
  }
  
  typ = 0
  sub:string=''
  tpc:string=''
  lang:string=''
mssg=''
  resp:any=[[],[]]
  search()
  {
    this.data.searchp({city:this.city,company:this.company,designation:this.designation}).subscribe(
      data => this.searchresp = data,
      (err) => this.mssg =  'please check your connection',
      () => {}
    ) 
  }


  bresp:Object
book(cid,typ)
{
  if(!sessionStorage.getItem('user'))
  {
    openNavlogin();
     return 
    
  }

  // if(!sessionStorage.getItem('feed'))
  // {
  //   this.router.navigate(['/feedback'])
  // }

  if(typ == 0)
  {
    this.data.fbookclass({'session_key':sessionStorage.getItem('user'),'cid':cid}).subscribe(
    data => this.bresp = data,
    (err) => console.log(err),
    () => this.sucresp(this.bresp)
  )
  }
  
  else
  {
    this.data.ubookclass({'session_key':sessionStorage.getItem('user'),'cid':cid}).subscribe(
      data => this.bresp = data,
      (err) => console.log(err),
      () => this.sucresp(this.bresp)
    )

  }
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


onCreateDesc(cid){
  if(!sessionStorage.getItem('user'))
  {
    openNavlogin()
    return
  }
  sessionStorage.setItem('cid',cid)
  this.dialog.open(DescriptionComponent)
}



}
