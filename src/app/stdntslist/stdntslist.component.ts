import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'

@Component({
  selector: 'app-stdntslist',
  templateUrl: './stdntslist.component.html',
  styleUrls: ['./stdntslist.component.scss']
})
export class StdntslistComponent implements OnInit {

  constructor(private data:DataService) { }


  lst:any
  ngOnInit() {
    this.data.getstdlist({
      'session_key':sessionStorage.getItem('user'),
      'type':sessionStorage.getItem('typ'),
      'id':sessionStorage.getItem('cid')
  }).subscribe(
    data => this.lst = data,
    (err) => console.log(err),
    () => this.succ(this.lst)
  )
  }

  succ(resp)
  {
    if(resp.code)
    {
      alert(resp.message)
    }
  }

}
