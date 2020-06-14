import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'
@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {

  constructor(private data:DataService) { }
resp:any={
  'clss':{'dcp':''}
}
  ngOnInit() {
    this.data.classdetails({'session_key':sessionStorage.getItem('user'),
                             'cid':sessionStorage.getItem('cid'),
                              'typ':sessionStorage.getItem('typ')             
  }).subscribe(
    data => this.resp = data,
    (err) => console.log(err),
    () => this.succ(this.resp)
  )
  }

  succ(resp)
  {
    sessionStorage.removeItem('cid')
    sessionStorage.removeItem('typ')
    if(resp.code != 200)
    {
alert(resp.message)
    }
    this.resp = resp.body
  }


  openlink(link)
  {
    window.open(link)
  }
}
