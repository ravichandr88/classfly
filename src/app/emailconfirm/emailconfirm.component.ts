import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-emailconfirm',
  templateUrl: './emailconfirm.component.html',
  styleUrls: ['./emailconfirm.component.scss']
})
export class EmailconfirmComponent implements OnInit {

  constructor(private route: ActivatedRoute,private data:DataService) { }

  sess=''
  resp:Object

  reset = false
  ngOnInit() {
    this.sess = this.route.params['value'].sess
    this.data.confirmemail(this.sess).subscribe(
      data => this.resp = data,
      (err) => console.log(err),
      () => {
        this.succ(this.resp)
      }
    )
  }


  succ(re)
  {
if(re.code==200)
{
  sessionStorage.setItem('user',re.session_id)
  alert('Confirmed');
}
else if(re.code==201)
{
  this.reset = true
  sessionStorage.setItem('user',re.session_id)
}
else
{
  alert('Session Expired,Please request a new link')
}
  }

  passw:string
  cnfpassw:string

  pasresp:Object
  save()
  {
    if(this.passw!=this.cnfpassw){
      alert('Password Dont match')
      return
    }
    var data = {
      'password':this.passw,
    'session_id':sessionStorage.getItem('user')
          }

    console.log(data)
    this.data.changepassword(data).subscribe(
      data => this.pasresp = data,
      (err) => console.log(err),
      () => {
        this.pasuc(this.pasresp) 
      }
    )

  }

  pasuc(res)
  {
    if(res.code == 200)
    {
      alert('success')
    }
    else{
      alert('Session Expired')
    }
  }
}


