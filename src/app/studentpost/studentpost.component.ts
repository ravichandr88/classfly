import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-studentpost',
  templateUrl: './studentpost.component.html',
  styleUrls: ['./studentpost.component.scss']
})
export class StudentpostComponent implements OnInit {
  languages: string[] = [
    'English','Kannada','Tamil','Hindi','Bengali','Assamese'
];

  constructor(private data:DataService) { }

  ngOnInit() {
  }

  subject:string=''
  topic:string=''
  description:string=''
  langauge:string='English'
  submited_bool:boolean = false

//response object
resp:Object


  submit()
  {
    this.submited_bool = true
    //return if any one of the feilds are empty
    if(this.subject == "" || this.topic == "" || this.description == "")
    {
      return
    }

    //if all the fields are filled
    this.data.create_request(
      {'subject':this.subject,
      'topic':this.topic,
      'description':this.description,
      'language':this.langauge,
      'session_key':sessionStorage.getItem('user')
    }
    ).subscribe(
      data => this.resp = data,
      (err) => console.log(err),
      () => this.succ_call(this.resp)
    )
  }


  succ_call(resp)
  {
if (resp.code == 200)
alert('sucess')

else alert('Problem')
  }
}
