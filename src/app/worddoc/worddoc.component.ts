import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder} from '@angular/forms'
import { DataService } from '../data.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-worddoc',
  templateUrl: './worddoc.component.html',
  styleUrls: ['./worddoc.component.scss']
})
export class WorddocComponent implements OnInit {


  DJANGO_SERVER = 'http://127.0.0.1:8000'
  form: FormGroup;
  response;
  imageURL;

  constructor(private builder : FormBuilder, private data:DataService, private router : Router ) { }

  ngOnInit() {
    if(sessionStorage.getItem('user')==null)
    {
      this.router.navigate(['login'])
    }

    this.form = this.builder.group({
      profile: [''],
      title:['']
    });
  }



  
  onChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.get('profile').setValue(file);
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.form.get('profile').value);
    formData.append('session_key',sessionStorage.getItem('user'));
    formData.append('title',this.form.get('title').value);

    this.data.article(formData).subscribe(
      (res) => {
        this.response = res;
        console.log(res);
      },
      (err) => {  
        console.log(err);
      }
    );
  }


  // onFileChange(event) {
  //   let reader = new FileReader();
  //   if(event.target.files && event.target.files.length > 0) {
  //     let file = event.target.files[0];
  //     reader.readAsDataURL(file);
  //     reader.onload = () => {
  //       this.form.get('avatar').setValue({
  //         filename: file.name,
  //         filetype: file.type,
  //         value: reader.result.split(',')[1]
  //       })
  //     };
  //   }
  // }

//   fileData: File = null;
   
 
   

//   response : Object

  
// fileChanged(e) {
//   this.fileData = e.target.files[0];
// }




//   onSubmit() {
//       const formData = new FormData();
//       formData.append('file', this.fileData);
//       console.log(this.fileData)
//       this.data.article({'file':this.fileData})
//         .subscribe(
//           data => this.response = data,
//           (err) => console.log(err),
//           () => {
//             this.success(this.response)
//           }
//         )
//   }


//   success(resp)
//   {
//     if(resp.status == 'error')
//     {
//       console.log(resp.message)
//     }
//     else{
//       console.log(resp.message)
//     }
//   }
}
