import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-searchclass',
  templateUrl: './searchclass.component.html',
  styleUrls: ['./searchclass.component.scss']
})
export class SearchclassComponent implements OnInit {

  constructor(private data:DataService,private router : Router,private route: ActivatedRoute) { }
 
 typo:string[]=['Paid','Free']
 typn:string[]=['Free','Paid']
  
 
 ngOnInit() {
  this.sub = this.route.snapshot.params.val

    this.data.initialserach().subscribe(
      data => this.resp=data,
      (err) => alert('PLease check your internet connection')
    )
  // if(this.sub != ''){
  // this.search()
  // }
  }
  
  typ = 0
  sub:string=''
  tpc:string=''
  lang:string=''

  resp:Object

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
      return
    }
    this.data.searchall(this.typ,this.sub,this.tpc,this.lang).subscribe(
      data => this.resp = data,
      (err) => console.log(err)
    )
  }


  bresp:Object
book(cid,typ)
{
  if(!sessionStorage.getItem('user'))
  {
      this.router.navigate(['login'])
    
  }

  if(!sessionStorage.getItem('feed'))
  {
    this.router.navigate(['/feedback'])
  }

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
}
else if(resp.code == 201)
{
  alert('You have already booked for this class')
}
else if(resp.code == 202)
{
  alert('Seats are filled')
}
}
}
