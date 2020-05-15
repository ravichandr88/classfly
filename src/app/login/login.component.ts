import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators } from '@angular/forms'
import { DataService} from '../data.service';
import { Router }  from '@angular/router';
import { SharedService } from '../shared.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import {  ActivatedRoute } from '@angular/router';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  lform : FormGroup
  submitted : boolean = false
  response :Object
  usrerr : boolean = false
  psswderr : boolean = false
  confirm:boolean = false


  constructor( private dialogRef: MatDialogRef<LoginComponent>,private service:SharedService,private builder : FormBuilder,private data : DataService,private router : Router) { }

  ngOnInit() {
    this.lform = this.builder.group(
      {
        'username':['',Validators.required],
        'password' : ['',[Validators.required,Validators.minLength(6)]]
      }
    )
  }

  get f() { return  this.lform.controls }

  print()
  {
    this.submitted = true

    if (this.lform.invalid) {  return;  }



    this.data.login(this.lform.getRawValue()).subscribe(
      data => this.response = data,
      (err) => console.log(err),
      () => {
          this.success(this.response)
      }
    )
  }




  success(resp)
  {
    if(resp.code == 201)
      {
        this.usrerr = true
        this.confirm = false
        this.psswderr = false
        console.log(resp.message,this.usrerr)
      }
      else if(resp.code == 202)
      {
        this.psswderr = true
        this.confirm = false
        this.usrerr = false
        console.log(resp.message)
      }
      else if (resp.code == 203)
      {
        this.confirm = true
        this.usrerr = false
        this.psswderr = false
        alert('Please confirm your email.')
      }
    else 
    {
      sessionStorage.setItem('user',resp.sessionId)
      if (resp.tid != null)
      {
        sessionStorage.setItem('tid',resp.tid)
      }
      this.updateOnMain(true)
      this.dialogRef.close()
      this.router.navigate(['dash'])
    }
  }



  
  updateOnMain(onMain):void {
    var hin = 1
    this.service.onLoginEvent.emit(onMain);
    console.log(onMain) 
  }

}