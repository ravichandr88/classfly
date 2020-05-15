import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormBuilder,Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { Router,ActivatedRoute } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AccountdetailsComponent } from '../accountdetails/accountdetails.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-trainersignup',
  templateUrl: './trainersignup.component.html',
  styleUrls: ['./trainersignup.component.scss']
})
export class TrainersignupComponent implements OnInit {

  constructor(private dialogref:MatDialogRef<TrainersignupComponent>,public dialog: MatDialog,private route: ActivatedRoute,private formBuilder : FormBuilder,private data : DataService, private router : Router) { }
  myForm : FormGroup
  submitted : boolean = false

  usererr = 'tmp'
 
  response:any={
    'username':'',
    'email':''
  }

  imgresp:Object

  user:boolean=false
  ngOnInit() {
    // if (this.route.params['value'].access_token != '' && this.route.params['value'].session_id == '')
    // {
    //   console.log(this.route.params['value'].access_token,this.route.params['value'].session_id);
   
    //   sessionStorage.setItem('user',this.route.params['value'].session_id)
    //   //get profile picture
     
    // }
   

     if(!sessionStorage.getItem('user'))
    {
      
      this.dialogref.close()
      this.dialog.open(LoginComponent)
      return this.router.navigate([''])
     
    }
   // if(!sessionStorage.getItem('feed'))
   // {
   //   return this.router.navigate(['feedback'])
   // }
    this.user = true
    this.myForm = this.formBuilder.group({
      'linkurl':['', Validators.required],
      'company':['',Validators.required],
      'designation':['',Validators.required],
      'imgurl':['', ],
      'dscp':['',],
      'techkeys':["",],
      'langs':['',],
      // 'phonenum':['+91',[Validators.required,Validators.maxLength(13),Validators.minLength(13)]]
    })
    if(sessionStorage.getItem('user')){
    this.data.userdetail({'session_key':sessionStorage.getItem('user')}).subscribe(
      data => this.response = data,
      (err) => console.log(err),
      () => {
       console.log(this.response)
      }
    )
    }
    else{
      this.router.navigate(['login'])
    }
   
  }

  get f() { return this.myForm.controls; }

resp:Object
// print()
// {
  // this.data.profile({'session_key':sessionStorage.getItem('user')}).subscribe(
  //   data => this.response = data,
  //   (err) => console.log(err),
  //   () => {
  //    console.log(this.response)
  //   }
  // )

//   if (this.myForm.invalid){ 
//   console.log('not correct')
//     return ;
//   }
//   else  {
//     var data = this.myForm.value
//     data['session_id']=sessionStorage.getItem('user')
//   // alert(JSON.stringify(this.response))
//   this.data.trainersignup(data).subscribe(
//     data => this.response = data,
//     (err) => console.log(err),
//     () => this.succ(this.response)
//   )
//   }
// }

// succ(res)
// {
// if(res.code == 200)
// {
// alert('Success')
// }
// else
// {
// alert('Please check the phone number,/nshould be having country code as +91 and number should be 10 digits long')
// }
// }

step1()
{                                                                         
  window.open("https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=77ml0pujhg3d8h&redirect_uri=http://localhost:8000/linkedin&scope=r_liteprofile&state=123456","_self")
}


accdtls:Object
openAc()
{
  const dialogRef = this.dialog.open(AccountdetailsComponent, {
    // width: '250px',
    // data: {name: this.name, animal: this.animal}
  });


  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    this.accdtls = result;
    console.log(this.accdtls)
  });
}


//
linkurl:string=''
imgurl:string='https://www.petakids.com/wp-content/uploads/2015/11/Baby-Bunny.jpg'
dscp:string='I am '
dscperr:string=''
techkeys:string=''
keywords:string[]=[]
keyerr:string=''
langs:string='English,'
language:string[]=[]
langerr:string=''
linkerr:string=''
company:string=''
designation:string=''
desigerr:string=''
comperr:string=''

linkvalidate()
{
if( /(ftp|http|https):\/\/?(?:www\.)?linkedin.com(\w+:{0,1}\w*@)?(\S+)(:([0-9])+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(this.linkurl) ) 
{
   return true
}else
{
   return false
}
} //end of linkvalidate

print()
{
  //chcek linkdein url
  if(!this.linkvalidate()){
   this.linkerr='Not a valid link'
   return}
  else{this.linkerr=''}

  
  //vlidate decription
  if(this.dscp.length > 500 )
  {
    this.dscperr='Please fill within 500 charactrers'
  }
  else
  {
    this.dscperr=''
  }

  if(this.company == '')
  {
    this.comperr='Please fill in company details'
  }
  else{ this.comperr = ''}

  if(this.designation == '')
  {
    this.desigerr='Please fill in company details'
  }
  else{ this.desigerr = ''}

  //add keywords
  if(this.techkeys == '')
  {
this.keyerr='Please fill in atleast one skill'
return
  }
  else{
    this.keyerr=''
  }
  this.keywords=this.techkeys.split(',')
  
  //add languages
  if(this.langs == '')
  {
    this.langerr='Please provide atleast one language'
    return
  }
  else
  {
    this.langerr=''
  }
  this.language=this.langs.split(',')

  console.log(this.keywords,this.language,this.dscp,this.linkurl)
  console.log({
    'linkedinurl':this.linkurl,
    'keywords':this.keywords,
    'languages':this.dscp,
    'imgurl':this.imgurl,
    'company':this.company,
    'designation':this.designation
  })

  this.data.trainersignup({
    'linkedinurl':this.linkurl,
    'keywords':this.keywords,
    'languages':this.dscp,
    'imgurl':this.imgurl,
    'company':this.company,
    'designation':this.designation,
    'session_id':sessionStorage.getItem('user')
  }).subscribe(
    data => this.resp =data,
    (err) => console.log(err),
    () => { this.scus(this.resp)}
  )

}

scus(resp)
{
  if(resp.code == 200)
  {
    this.dialog.open(AccountdetailsComponent)
    this.dialogref.close()
  }
  else
  {
    alert(resp.message)
  }
}

}
