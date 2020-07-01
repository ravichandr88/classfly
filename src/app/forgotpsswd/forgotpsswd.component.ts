import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { AlphaComponent } from '../alpha/alpha.component';
import { NgxUiLoaderService } from 'ngx-ui-loader'; // Import NgxUiLoaderService


@Component({
  selector: 'app-forgotpsswd',
  templateUrl: './forgotpsswd.component.html',
  styleUrls: ['./forgotpsswd.component.scss']
})
export class ForgotpsswdComponent implements OnInit {

  constructor(private ngxService: NgxUiLoaderService,private data:DataService,private router: Router,private dialog:MatDialog) { }


  //variables to set forms active
  forgot_psswd_form :boolean  = false
  forgt_otp_form:boolean = false
  verify_otp_form:boolean = false
  login_otp_form:boolean = false

  //html page text varaibles
  suc_sent_mail:string='' 
  otp_err:string = ''
  
//reset_form 
reset_form:boolean = false



  ngOnInit() {
    //when they have reached here after signup
    if(sessionStorage.getItem('user'))
    {
      this.verify_otp_form = true
    }
    // else if(sessionStorage.getItem('forgot'))
    // {
    //   this.forgot_psswd_form = true
    // }
    else if(sessionStorage.getItem('reset') == 'true')
    {
      this.forgot_psswd_form = true
    }
    else
    {
      this.login_otp_form = true
    }
  }
email=""
resp:Object
  verify()
  {
    this.ngxService.start();
    setTimeout(() => {
      this.ngxService.stop(); // stop foreground spinner of the master loader with 'default' taskId
    }, 5000);

    //api call
    this.data.reset_paasword(this.email).subscribe(
      data => this.resp = data,
      (err) => console.log(err),
      () => {
        this.response(this.resp)
      }
    )
  }

  response(res)
  {
    if (res.code == 200)
    {
      // alert('Password reset link sent')
      this.suc_sent_mail = 'OTP sent to your this.email.'
      this.forgt_otp_form = true
    }
    else
    {
      this.suc_sent_mail = res.message
    }
  }

  //verify otp for password rest
  verify_frgt_otp()
  {

    var resp
    this.data.verify_frgt_otp({'email':this.email,'otp':this.otp}).subscribe(
      data => resp = data,
      (err) => {
        if(err.status == 400)
          this.otp_err = err.error.message
      },
      () => {
        sessionStorage.setItem('frgt_user',resp.seesoin_id)  //this is temp token for reseting password
        this.forgt_otp_form = false
        this.reset_form = true
        this.suc_sent_mail = ''
      }
    )
  }

// reset password
psswd:string=''
cpsswd:string = ''
psswd_text:string = ''

  
reset_pasword()
{
  if(this.psswd.length < 8)
  {
    this.psswd_text = 'Password length should be atleast 8 characters'
    return 
  }

  if(this.psswd != this.cpsswd)
  {
    this.psswd_text = "Passwords don't match"
    return 
  }
  this.psswd_text = ''
  var resp

  this.data.changepassword({'session_id':sessionStorage.getItem('frgt_user'),'password':this.psswd,'email':this.email}).subscribe(
    data => resp = data,
    (err) => {
      if(err.status == 400)
      this.psswd_text = err.error.message
    },
    () => {
      this.psswd_text = ''
      sessionStorage.removeItem('frgt_user')
      this.dialog.open(AlphaComponent,{width: '250px',data:'Password reset successfull,Please login'})
      this.router.navigate([''])
    }
  )
}

// end of password reset




  otp:number 

  onOtpChange(value)
     {
       if(value.length == 4)
       {
        console.log(value)
        this.otp = value
       }
     }
     
  
    // confirm email with OTP after signup
     verify_otp()
     {
       var response
       
       console.log(JSON.stringify(this.otp).length)
       if(JSON.stringify(this.otp).length == 6)
       {
         this.data.verify_email_otp({'session_key':sessionStorage.getItem('user'),'otp':this.otp}).subscribe(
          data => response = data,
          (err) => {
            console.log(err)
            if(err.status == 400)
            {
              alert(err.error.message)
            }
          },
          () => { 
            if(response.success)
            {
              this.router.navigate([''])
            }
          }
         )
       }
     }

  // confirm otp when they failed login, forgot to verify after signup
  username_email:string = ''
  u_e_error = ''
  otp_error = ''
  verify_login_otp()
  {
    if(this.username_email == '')
    {
      this.u_e_error = 'Please enter the username or email, and not both'
      return 
    }
    this.u_e_error = ''
    this.otp_error = ''
    var response
    this.data.username_email_otp({'username_email':this.username_email,'otp':this.otp}).subscribe(
      data => response = data,
      (err) => {
        if(err.status == 401)
        {
          this.u_e_error = err.error.message
        }
        else if(err.status == 400)
        {
          this.otp_error = err.error.message
        }

      },

      () => {
        this.router.navigate([''])
      }
    )

  }
  

  //function to resend otp for email
  resend_otp()
  {
    if(this.username_email == '')
    {
      this.u_e_error = 'Please enter username or email'
      return 
    }
    this.u_e_error = ''

    var response
    this.data.resend_email_otp({'username_email':this.username_email}).subscribe(
      data => response = data,
      (err) => {
        if(err.status == 400)
        {
          this.u_e_error=err.error.message
        }
      },
      () => {
        this.u_e_error = 'Please check your email for otp from CLASSFLY'
      }
    )
  }
}
