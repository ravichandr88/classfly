import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';



@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  constructor(private router:Router,public dialogRef: MatDialogRef<PaymentComponent>) { }
 
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
  closewindow(){
    this.dialogRef.close();
  }

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

