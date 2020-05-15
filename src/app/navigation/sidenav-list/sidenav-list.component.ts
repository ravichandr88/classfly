import { Component, OnInit, Output, EventEmitter,HostListener } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ComplaintComponent } from 'src/app/complaint/complaint.component';
import { SignupComponent } from 'src/app/signup/signup.component';
import {LoginComponent} from 'src/app/login/login.component';
import {PaymentComponent} from 'src/app/payment/payment.component';
import { TrainersignupComponent } from 'src/app/trainersignup/trainersignup.component';
import { HelppopupComponent} from 'src/app/helppopup/helppopup.component'
import { ContactuspopupComponent } from 'src/app/contactuspopup/contactuspopup.component';
import { SharedService } from 'src/app/shared.service';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router'
 

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit {

  @Output() sidenavClose = new EventEmitter();


 onMain:any

 
 laptop:boolean = true
 user:boolean = false
 tid:boolean = false
 subscription
 username=''
 followers=''
 coins:any



  constructor(private router:Router,private dialog:MatDialog, private service:SharedService,private data:DataService) { 
    service.onLoginEvent.subscribe(
      (onMain) => { 
        this.onMain = onMain;
        this.user = true
        if(sessionStorage.getItem('tid') != null)
        {
          this.tid = true
        }
        this.usrdtls()

      }
   );
//to update coins when done
   service.coinEvent.subscribe(
     (coins) => {
       this.coins=coins;
       console.log(coins)
     }
   );
//    service.onLogoutEvent.subscribe(
//     (onMain) => { 
//       this.onMain = onMain;
//       this.user = false
//       this.tid = false
//       console.log(onMain)
//     }
//  );
  }
   


  ngOnInit()
  {
    
   if(sessionStorage.getItem('user') != null)
   {
     this.user = true
     if(sessionStorage.getItem('tid') != null)
     {
       this.tid = true
     }
     
   }
   if(window.innerWidth <500)
   {
     this.laptop = false
   }

   if(sessionStorage.getItem('user'))
   {
     this.usrdtls()
   }
  }

  @HostListener('window:resize', ['$event'])
    onResize(event) {
        if (event.target.innerWidth < 500) {
            this.sidenavClose.emit();
            this.laptop = false
        }
        else{
          this.laptop = true
        }
    }

 
  public onSidenavClose = () => {
    if(!this.laptop)
    {
      this.sidenavClose.emit();
    }
    
  }

  logout()
  {
    sessionStorage.removeItem('user')
    sessionStorage.removeItem('tid')
    this.user = false
    this.tid=false
    this.onSidenavClose()
    this.service.onLogoutEvent.emit(true)
  }
  onCreateReport(){
    this.dialog.open(ComplaintComponent)
  }
  
  onCreateSignUp(){
    this.dialog.open(SignupComponent);

  }
  onCreateLogin(){
    //    const dialogConfig = new MatDialogConfig();
    //    dialogConfig.disableClose = true;
      //  dialogConfig.autoFocus= true;
        //dialogConfig.width = "40%";
        this.dialog.open(LoginComponent);
    
      }
      onCreateCoin(){
        //    const dialogConfig = new MatDialogConfig();
        //    dialogConfig.disableClose = true;
          //  dialogConfig.autoFocus= true;
            //dialogConfig.width = "40%";
            const paymnt = this.dialog.open(PaymentComponent);
            paymnt.afterClosed().subscribe(
              result => {
                this.usrdtls()
              }
            )
        
          }
          onCreatetsign(){
            //    const dialogConfig = new MatDialogConfig();
            //    dialogConfig.disableClose = true;
              //  dialogConfig.autoFocus= true;
                //dialogConfig.width = "40%";
                this.dialog.open(TrainersignupComponent);
            
              }
              onCreateHelp(){
                this.dialog.open(HelppopupComponent);
            
              }
              onCreateContactUs(){
                this.dialog.open(ContactuspopupComponent);
            
              }



              //login even call

             

              //gret the user detils
              resp
              usrdtls()
              {
                this.data.getusrdtls().subscribe(
                  data => this.resp = data,
                  (err) => console.log(err),
                  () => {
                      this.sucfun(this.resp)
                  }
                )
              }


              sucfun(resp)
              {
                if(resp.code ==200)
                {
                  this.username=resp.username
                  this.followers = resp.following
                  this.coins=resp.coins
                  sessionStorage.setItem('level',resp.level)
                }
                else
                {
                  alert(resp.message)
                }
              }

              //open trainer signup popup
              opentrainersignup()
              {
                this.dialog.open(TrainersignupComponent)
              }

              home()
              {
                this.router.navigate([''])
              }



          open(url)
          {
            window.open(url);
          }

      openrecord()
      {
        if(sessionStorage.getItem('user'))
        {
          this.router.navigate(['record'])
        }
        else
        {
          this.dialog.open(LoginComponent);
        }
      }
}

