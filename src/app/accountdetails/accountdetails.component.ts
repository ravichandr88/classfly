import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DataService } from '../data.service';
@Component({
  selector: 'app-accountdetails',
  templateUrl: './accountdetails.component.html',
  styleUrls: ['./accountdetails.component.scss']
})
export class AccountdetailsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AccountdetailsComponent>,private api:DataService) { }

  ngOnInit() {
  }
  accerr:string=''
  ifscerr:string=''
  usererr:string = ''
  data={
    'ifsc':'',
    'accno':'',
    'accno2':'',
    'name':'',
    'UPI':'',
    'phone':'',
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

    //post the data to server
    this.api.traineracc(this.data).subscribe(
      api => this.resp = api,
      (err) => console.log(err),
      () => this.succall(this.resp)
    )
    
    // this.dialogRef.close(this.data);
  }


  succall(resp)
  {
    if(resp.code == 200)
    {
      alert('Go to your email and confirm ZOOM account')
      this.dialogRef.close()
    }
    else if(resp.code == 201)
    {
      this.dialogRef.close()
    }
    else{
      alert(resp.message)
    }
  } 
}
