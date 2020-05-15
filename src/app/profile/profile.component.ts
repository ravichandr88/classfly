import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { DataService} from '../data.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  pform : FormGroup
  submitted : boolean = false
  empTypes=[
    {'name':'SelfEmployement','value':'SelfEmployement'},
    {'name':'Employee','value':'Employee'}
  ]

  response:Object
  profile : boolean = false     //to show the previously updated profile data
  profileform : boolean        //to show the form 
  profiledata : Object          //to hold the profile data

  constructor(private builder : FormBuilder, private data: DataService, private router: Router) { }

  ngOnInit() {


    if(sessionStorage.getItem('user') == null)
    {
      this.router.navigate(['/login'])
    }

    else
    {
      // this.data.profile({'session_key':sessionStorage.getItem('user'),'get':'yes'}).subscribe(
      //   data => this.profiledata = data,
      //   (err) => console.log(err),
      //   () => {
      //    this.profilesucc(this.profiledata)

      //   }
      // )
    }

    this.pform = this.builder.group({
      'firstName':['',Validators.required],
      'lastName' : [''],
      'contactNumber':['',[Validators.required,Validators.minLength(13)]],
      'alternateEmail':['',[Validators.required,Validators.email]],
      'educationQualification':['',Validators.required],
      'workExperience': ['',Validators.required],
      'employmentType':['',Validators.required],
      'currentDesignation':['',Validators.required],
      'currentOrganisation':['',Validators.required],
      'industrySegment':['',Validators.required],
      'placeOfEmployment':['',Validators.required],
      'futureCareerAspiration':['',Validators.required]

    })

  }

  get f() { return this.pform.controls }



  profilesucc(resp)
  {
    if(resp.status == 'success')
    {
      this.profile = true
      this.profileform = false
      this.profiledata = resp.profile
    }
    else if(resp.status == 'notFound')
    {
      this.profileform = true
      this.profile = false
    }
    else{
      this.router.navigate(['/login'])
    }
  }

  print()
  {
    this.submitted = true

    if(this.pform.invalid)
    {
      return;
    }
    console.log(this.pform.getRawValue())
    var h = this.pform.getRawValue()
    h['session_key'] = sessionStorage.getItem('user')
    h['get'] = 'no'
    // this.data.profile(h).subscribe(
    //   data => this.response = data,
    //   (err) => console.log(err),
    //   () => {
    //     this.success(this.response)
    //   }
    // )
  }

  success(resp)
  {
    if (resp.status == 'error')
    {
      console.log(resp.message)
    }
    else
    {
      alert('Updated succesfully')
      this.router.navigate(['/'])

    }
  }

}
