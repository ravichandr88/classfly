import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  constructor(private router:Router) { }
 
  ngOnInit() {
   // if(!sessionStorage.getItem('user'))
    //{
      //this.router.navigate(['login'])
    //}
   // if(!sessionStorage.getItem('feed'))
   // {
   //   alert('You cannot access')
    //  this.router.navigate(['/feedback'])
   // }
  }

  coin = 0

buy()
{
  console.log(this.coin)
  if(this.coin  < 1)
  {
    alert('Coins should be of positive number')
    return
  }
  window.open("http://datafly.herokuapp.com/razor/"+sessionStorage.getItem('user')+'/'+this.coin, "_blank");
}
}

