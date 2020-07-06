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

  succ(resp)
  {
    this.cid = sessionStorage.getItem('cid')
    
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



  refresh()
  {
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
}

