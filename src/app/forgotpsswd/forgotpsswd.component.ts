import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-forgotpsswd',
  templateUrl: './forgotpsswd.component.html',
  styleUrls: ['./forgotpsswd.component.scss']
})
export class ForgotpsswdComponent implements OnInit {

  constructor(private data:DataService) { }

  ngOnInit() {
  }
email=""
resp:Object
  verify()
  {
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
      alert('Password reset link sent')
    }
    else
    {
      alert(res.message)
    }
  }

}
