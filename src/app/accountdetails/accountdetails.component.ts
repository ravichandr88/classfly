// import { Component, OnInit } from '@angular/core';
// import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
// import { DataService } from '../data.service';

// import { Router }  from '@angular/router';

// @Component({
//   selector: 'app-accountdetails',
//   templateUrl: './accountdetails.component.html',
//   styleUrls: ['./accountdetails.component.scss']
// })
// export class AccountdetailsComponent implements OnInit {
//   firstaccerr: string;

//   constructor(private router : Router,private api:DataService) { }

//   ngOnInit() {
//   }
//   form:boolean=true
//   accerr:string=''
//   ifscerr:string=''
//   usererr:string = ''
//   data={
//     'ifsc':'',
//     'accno':'',
//     'accno2':'',
//     'name':'',
//     'UPI':'',
//     'phone':'',
//     'session_id':sessionStorage.getItem('user')
//   }

//   resp:Object
//   close()
//   {
//     //ifsc validation
//     if(this.data['ifsc']=='')
//     {
//       this.ifscerr='Please fill the feild'
//       return
//     }
//     else this.ifscerr='';
//     //account number validation
//     if(this.data['accno']=='' || this.data['accno2'] == '')
//     {
//       this.accerr = 'Please fill in the feilds'
//     }
//     else if(this.data['accno'].match(/^[0-9]+$/) == null)
//     {
//       this.accerr = 'Only digits Please'
//     }
//     else if(this.data['accno'] != this.data['accno2'])
//     {
//       this.accerr = 'Both account number do not match'
//       return
//     }
//     else this.accerr='';

//     //acc holder name
//     if(this.data['name']=='')
//     {
//       this.usererr='Please fill the feilds'
//       return
//     }
//     else this.usererr = ''

//     //post the data to server
//     this.api.traineracc(this.data).subscribe(
//       api => this.resp = api,
//       (err) => console.log(err),
//       () => this.succall(this.resp)
//     )
    
//     // this.dialogRef.close(this.data);
//   }


//   succall(resp)
//   {
//     if(resp.code == 200)
//     {
//       alert('Go to your email and confirm ZOOM account')
//       // this.dialogRef.close()
//     }
//     else if(resp.code == 201)
//     {
//       // this.dialogRef.close()
//       this.router.navigate([''])
//     }
//     else{
//       alert(resp.message)
//     }
//   } 

// //only for testing and development work only
//   change()
//   {
//     this.form = !this.form
//   }
//   back()
//   {
//     this.router.navigate(['trainersignup/:access_token/:session_id'])
//   }
// }


//new pastedimport 
import { Router }  from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DataService } from '../data.service';
import { FormControl,FormGroup,FormBuilder,Validators, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-accountdetails',
  templateUrl: './accountdetails.component.html',
  styleUrls: ['./accountdetails.component.scss']
})
export class AccountdetailsComponent implements OnInit {


  
  myForm : FormGroup

  constructor(public formBuilder:FormBuilder, public router:Router,public dialogRef: MatDialogRef<AccountdetailsComponent>,private api:DataService) { }

  // code_ctrl= new FormControl()
  
  ngOnInit() {
    this.myForm = this.formBuilder.group({
      code:[this.code,Validators.required],
      session:['',Validators.required]
    })
  }

  

  accerr:string=''
  ifscerr:string=''
  usererr:string = ''
  otp:boolean = false
  phnerr : boolean = false
  data={
    'ifsc':'',
    'accno':'',
    'accno2':'',
    'name':'',
    'UPI':'',
    'phone':'+91',
    'session_id':sessionStorage.getItem('user')
  }

  resp:Object
  close()
  {
    //ifsc validation
    if(this.data['ifsc']=='')
    {
      this.ifscerr='Please fill the feild'
      return
    }
    else this.ifscerr='';

    //account number validation
    if(this.data['accno']=='' || this.data['accno2'] == '')
    {
      this.accerr = 'Please fill in the feilds'
    }
    else if(this.data['accno'].match(/^[0-9]+$/) == null)
    {
      this.accerr = 'Only digits Please'
    }
    else if(this.data['accno'] != this.data['accno2'])
    {
      this.accerr = 'Both account number do not match'
      return
    }
    else this.accerr='';

    //acc holder name
    if(this.data['name']=='')
    {
      this.usererr='Please fill the feilds'
      return
    }
    else this.usererr = ''

    this.phone_inpt = true  //turn on the phone input 
    this.form = false       //hide the account details form

   
    
    // this.dialogRef.close(this.data);
  }

  //post the account details
   saveacct()
   {
   this.api.traineracc(this.data).subscribe(
    api => this.resp = api,
    (err) => console.log(err),
    () => this.succall(this.resp)
  )
   }

  succall(resp)
  {
    if(resp.code == 200)
    {
      alert('Go to your email and confirm ZOOM account')
      // this.dialogRef.close()
      this.router.navigate(['book_classes'])
      
    }
    else if(resp.code == 201)
    {
      // sessionStorage.setItem
      // this.dialogRef.close()
      
    }
    else{
      alert(resp.message)
    }
  } 




  //rest serices for Kii
  signresp:Object
  code:string=''
  loginresp:Object
  Kiiacctkn:string=''
  verresp:Object
  //error mesage from kii 
  phnerrmsg:string

//boolean value to keep phone number input active
phone_inpt:boolean = false

  //signup code
 singup()
 {
   if(this.data['phone'].length != 13)
   {
     this.phnerr = true
   return 
  }
  
   

  this.phnerr = false
   this.api.kiisignup(this.data['phone']).subscribe(
     api => this.signresp = api,
     (err) => {
       console.log(err.error)
      //  this.phnerrmsg = err.error.message
      if(err.status == 409)
      {
        this.phnerrmsg = 'This phone number is already used by someone'
      }
      },
     () => 
     {this.signupsucc(this.signresp)
     }
   )
 }

 signupsucc(data)
 {

  if(data['userID']==null)
  {
    alert(data['message'])
  }

  else
  {
    this.api.kiilogin().subscribe(
      api => this.loginresp = api,
      (err)=>{},
      ()=> this.loginsuc(this.loginresp)
    )
  }
 }

 //login success
 loginsuc(resp)
 {
    //activate the otp enter form
    this.phone_inpt = false
     
  this.Kiiacctkn = resp['access_token']
  this.otp = true
 }


 verify()
 {
   console.log(this.myForm.getRawValue())
   this.myForm.patchValue({'session':this.Kiiacctkn})

   if(this.myForm.invalid)
   {
     alert('Please enter the code')
     return
   }
   this.api.Kiiverify(this.myForm.getRawValue()).subscribe(
     api => this.verresp = api,
     (err) => {alert('Wrond OTP')},
    () => {
      this.saveacct()
      
    }
   )
 }

 resend()
 {
   var response
   this.api.kiiresendotp({'session':this.Kiiacctkn}).subscribe(
     api => response = api,
     (err) => {},
     () => {}
   )
 }

 change_phn()
 {
  console.log('cleck change')
  var response
  this.api.kiideleteuser({'session':this.Kiiacctkn}).subscribe(
    api => response = api,
    (err) => {},
    () =>  this.phone_inpt = true
  )
  
 }

 //code for time of debug,
 //delelte this for production
 
 form:boolean = true
 change()
 {
   this.form = !this.form
   this.phone_inpt = true
 }

 back()
   {
     this.router.navigate(['trainersignup/:access_token/:session_id'])
   }

   verifyde()
   {

   }
   //accept the otp from input
   onOtpChange(value)
   {
     if(value.length == 4)
     this.myForm.patchValue({'code':value})
   }

   //to resent the otp if not recived
   
}


