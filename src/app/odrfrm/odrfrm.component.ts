import { Component, OnInit,NgModule } from '@angular/core';
// import { FormGroup,FormBuilder } from '@angular/forms';
import { FormGroup,FormControl, FormBuilder,FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { DataService } from '../data.service';
import { MatTableDataSource } from '@angular/material/table'



@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ]
})


@Component({
  selector: 'app-odrfrm',
  templateUrl: './odrfrm.component.html',
  styleUrls: ['./odrfrm.component.scss']
})




export class OdrfrmComponent implements OnInit {




  myForm : FormGroup

//to store the temporary data
  tmpdata = []


file:any;

  // {'userName':'sd','orgId':'sdcs','serviceCatName':'scdsds','state':'sdcsd'}


  constructor(private fbuilder : FormBuilder, private data:DataService) 
  {
  
  }

  ngOnInit() {
    this.myForm = this.fbuilder.group({
userId:'',
userName:'',
orgId:'',
email:'',
orderId:'',
serviceCatName:'',
subServiceCatName:'',
serviceTypeName:'',
serviceTypeCode:'',
serviceTypeDcrp:'',
slotTimings:'',
slotDate:'',
address:'',
city:'',
state:'',
pincode:'',
contactNumber:'',
orderDate:'',
orderTime:'',
status:'',
lastmodifiedDate:'',
  })



  }




  ds = []
  print()
  {
    // console.log(this.myForm.getRawValue());
    var sngleForm = this.myForm.getRawValue()

    sngleForm['file'] = this.file

    this.tmpdata.push(sngleForm)


    console.log(this.tmpdata)

    this.myForm.reset()
  }

  

fileChanged(e) {
    this.file = e.target.files[0];
    this.uploadDocument(this.file)
}
 

uploadDocument(file) {
  let fileReader = new FileReader();
  fileReader.onload = (e) => {
    this.file =  fileReader.result
  }
  fileReader.readAsText(this.file)

}



res:Object
post()
{
this.data.postData(this.tmpdata).subscribe(
  data => this.res = data,
  (err) => console.log(err),
  () => {
    console.log(this.res)
  }
)
}


}

