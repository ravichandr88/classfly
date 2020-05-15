import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { DescriptionComponent } from '../description/description.component';
import { MatDialog } from '@angular/material';
import { LoginComponent } from 'src/app/login/login.component'
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private data:DataService,private service:SharedService,private router : Router,private route: ActivatedRoute,private dialog:MatDialog) { }
 
 typo:string[]=['Paid','Free']
 typn:string[]=['Free','Paid']
  
 
 ngOnInit() {
  this.data.initialserach().subscribe(
    data => this.resp = data,
    (err) => alert('PLease check your internet connection'),
    ()=>{
      if(this.resp[0].length==0&&this.resp[1].length==0)
      {
        this.mssg='No classes found'
      }
      else
      {
        this.mssg=''
      }
    }
  )
  // this.sub = this.route.snapshot.params.val
  // if(this.sub != ''){
  // this.search()
  // }
  }
  
  typ = 0
  sub:string=''
  tpc:string=''
  lang:string=''
mssg=''
  resp:any=[[],[]]

  type()
  {
    if (this.typ == 0)
    {
      this.typ = 1
     
    }
    else{
      this.typ = 0
    }
    this.search()
  }

  search()
  {
    if(this.sub=='')
    {
      alert('Please input the subject')
      console.log('subject is empty')
      return
    }
    this.data.searchall(this.typ,this.sub,this.tpc,this.lang).subscribe(
      data => this.resp = data,
      (err) => console.log(err),
      ()=>{
        if(this.resp[0].length==0&&this.resp[1].length==0)
        {
          this.mssg='No classes found'
        }
        else
      {
        this.mssg=''
      }
      }
    )
  }


  bresp:Object
book(cid,typ)
{
  if(!sessionStorage.getItem('user'))
  {
     this.dialog.open(LoginComponent)
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

onCreateDesc(cid,typ){
  if(!sessionStorage.getItem('user'))
  {
    this.dialog.open(LoginComponent)
    return
  }
  sessionStorage.setItem('cid',cid)
  sessionStorage.setItem('typ',typ)
  this.dialog.open(DescriptionComponent);
}
}
