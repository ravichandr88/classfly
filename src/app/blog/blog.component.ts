import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { DataService } from '../data.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  bForm : FormGroup
  submited : boolean = false

  constructor(private builder:FormBuilder, private data: DataService, private router:Router) { }

  ngOnInit() {
    this.bForm = this.builder.group({
      'title':['',Validators.required],
      'content':['',Validators.required]
    })

    if(sessionStorage.getItem('user') == null)
    {
     this.router.navigate(['/login'])
    }
  }

  get f() { return this.bForm.controls; }

  shorterr : boolean = false
  lonerr : boolean = false

  response : Object

  print()
  {
  console.log(this.bForm.getRawValue())
  if (JSON.stringify(this.bForm.getRawValue().title).length > 100)
  {
    this.lonerr = true
    return
  }
  else if(JSON.stringify(this.bForm.getRawValue().content).length < 500)
  {
    this.shorterr = true
    return
  }

  var tmp = this.bForm.getRawValue()
  tmp['session_key'] = sessionStorage.getItem('user') 
  this.data.blog(tmp).subscribe(
    data => this.response = data,
    (err) => console.log(err),
    () => {
        this.success(this.response)
    }
  )

  }

  success(resp)
  {
    if(resp.status == 'error')
    {
      console.log(resp.error)
      if(resp.message == 'Please check your password')
      {
        alert('Please Login again')
      }
    }
    else{
      this.router.navigate([''])
    }
  }



}
