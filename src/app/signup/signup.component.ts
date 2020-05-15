// import { Component, OnInit } from '@angular/core';
// import { FormControl,FormGroup,FormBuilder,Validators } from '@angular/forms';
// import { MustMatch } from '../matchvalidator';
// import { DataService } from '../data.service';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-signup',
//   templateUrl: './signup.component.html',
//   styleUrls: ['./signup.component.scss']
// })
// export class SignupComponent implements OnInit {

//   constructor(private formBuilder : FormBuilder,private data : DataService, private router : Router) { }

//   myForm : FormGroup
//   submitted : boolean = false

//   usererr = 'tmp'
 

//   ngOnInit() {
//     this.myForm = this.formBuilder.group({
//       'username':['', Validators.required],
//       'email':['', [Validators.required, Validators.email]],
//       'password1':['', [Validators.required, Validators.minLength(6)]],
//       'password2':['', Validators.required]
//     }, {
//       validator: MustMatch('password1', 'password2')
//   })
//   }

//   get f() { return this.myForm.controls; }


//   response :Object

//  print()
//  {
//   this.submitted = true;

  
//   if (this.myForm.invalid) {  
//     console.log(this.f.password1.errors.required)
//     return; 
//    }
  
//   console.log(this.myForm.getRawValue())

//   this.data.signup(this.myForm.getRawValue()).subscribe(
//     data => this.response = data,
//     (err) => console.log(err),
//     () => {
//       this.aftrsignup(this.response)
//     }
//   )
 
//  }

//  aftrsignup(resp)
//  {
//   if (resp.code == 200)
//   {
//     alert('Success')
//     this.router.navigate([''])
//   }
//   else if(resp.code == 500)
//   {
//     alert('Email Already Used,You  can login.')
//   }
//   else{
//     this.usererr = this.myForm.getRawValue().username
//     console.log(this.usererr)
//   }
//  }



// }

import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormBuilder,Validators } from '@angular/forms';
import { MustMatch } from '../matchvalidator';
import { DataService } from '../data.service';
import { AuthService, GoogleLoginProvider } from 'angular4-social-login';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private _socioAuthServ: AuthService,public dialogRef: MatDialogRef<SignupComponent>,private formBuilder : FormBuilder,private data : DataService, private router : Router) { }

  myForm : FormGroup
  submitted : boolean = false

  usererr = 'tmp'
  err:any
  key:string
 

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      'username':['', Validators.required],
      'email':['', [Validators.required, Validators.email]],
      'password1':['', [Validators.required, Validators.minLength(6)]],
      'password2':['', Validators.required]
    }, {
      validator: MustMatch('password1', 'password2')
  })
  }

  get f() { return this.myForm.controls; }


  response :Object

 print()
 {
  this.submitted = true;

  
  if (this.myForm.invalid) {
    console.log(this.f.password2.errors)
    return;  }
  
  console.log(this.myForm.getRawValue())

  this.data.signup(this.myForm.getRawValue()).subscribe(
    data => this.response = data,
    (err) => console.log(err),
    () => {
      this.aftrsignup(this.response)
    }
  )

 }

 aftrsignup(resp)
 {
  if (resp.code == 200)
  {
    alert('Success')
    this.dialogRef.close()
    this.router.navigate([''])
  }
  else if(resp.code == 400)
  {
    this.err = resp.message,
    this.key = resp.key
    console.log(this.key,this.err)
  }
  
  
 }



 //login in with google
 

 user:any
  
  // Method to sign in with google.
  singIn(): void {
    var platform = GoogleLoginProvider.PROVIDER_ID;
    this._socioAuthServ.signIn(platform).then(
      (response) => {
        console.log(platform + " logged in user data is= " , response);
        this.user = response;
        this.googlesignup()
      },
      (err) => {console.log(err)}
    );
  }

googlesignup()
{
  
  this.data.signup(this.user).subscribe(
    data => this.response = data,
    (err) => console.log(err),
    () => {
      this.aftrsignup(this.response)
    }
  )
  return
}

  
  // Method to log out.
  signOut(): void {
    this._socioAuthServ.signOut();
    this.user = null;
    console.log('User signed out.');
  }

}
