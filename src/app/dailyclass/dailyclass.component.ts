import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-dailyclass',
  templateUrl: './dailyclass.component.html',
  styleUrls: ['./dailyclass.component.scss']
})
export class DailyclassComponent implements OnInit {
  dclasses:any 
//   [{tname: 'Ravi Chan',sub: 'Python',tpc:'OPPS',lang:'English',price:'5',time:'05:60'},
//   {tname: 'Anix A',sub: 'Python',tpc:'OPPS',lang:'English',price:'6',time:'05:60'},
// ];
mclasses:any=
[{tname: 'Ravi Chan',sub: 'Python',tpc:'OPPS',lang:'English',price:'5',time:'05:60'},
{tname: 'Anix A',sub: 'Python',tpc:'OPPS',lang:'English',price:'6',time:'05:60'},
];


  constructor(private data:DataService,private service:SharedService) {

   }

  ngOnInit() {

    //get the paid classes
    this.data.paidclasses().subscribe(
      data => this.dclasses = data,
      (err) => console.log(err),
    )

    //get the mentoring classes
    this.data.getmentorclass().subscribe(
      data => this.mclasses = data,
      (err) => console.log(err),
    )

    console.log(this.mclasses)
  }

buyresp:any
  buy(id)
  {
    console.log(id)
    this.data.buymentorclass({
      'session_key':sessionStorage.getItem('user'),
      'cid':id
    }).subscribe(
      data => this.buyresp = data,
      (err) => console.log(err),
      () => this.buysuc(this.buyresp)
    )
  }

  buysuc(resp)
  {
    if(resp.code == 200)
    {
      alert('Succesfully booked')
    }
    else {
      alert(resp.message)
    }
  }

//buy daily classes
bresp:any
buydailyc(cid)
{
  this.data.ubookclass({'session_key':sessionStorage.getItem('user'),'cid':cid}).subscribe(
    data => this.bresp = data,
    (err) => console.log(err),
    () => this.sucresp(this.bresp)
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
  
}
