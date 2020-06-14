import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators'

@Component({
  selector: 'app-blogview',
  templateUrl: './blogview.component.html',
  styleUrls: ['./blogview.component.scss']
})
export class BlogviewComponent implements OnInit {

  constructor(private data:DataService, private sanitizer: DomSanitizer, private http: HttpClient) { }

  artlst 
  response : Object

  ngOnInit() {
    this.data.get_article().subscribe(
      data => this.response = data,
      (err) => console.log(err),
      () => {
          this.succcess(this.response)
      }
    )
  }


  succcess(resp)
  {
    if(resp.status == 'success')
    {
      this.artlst = resp.articleList
    }
  }

fileUrl

  // download(url)
  // {
  //   // window.URL.revokeObjectURL(url);
  //   window.open(url);  
  //   // const data = url
  //   // const blob = new Blob([data], { type: 'application/octet-stream' });

  //   // this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
  //   // window.URL.createObjectURL(url)
  // }

// download(url)
// {
//   this.http.get(url,{responseType:ResponseContentType.Blob})
//         .catch((err)=>{return [do yourself]})
//         .subscribe((res:Response)=>{
//           var a = document.createElement("a");
//           a.href = URL.createObjectURL(res.blob());
//           a.download = fileName;
//           // start download
//           a.click();
//         })
//       }


respData
download(url)
{
   
 return this.http.get(url, { headers: new HttpHeaders({
  'Authorization': '{data}',
  'Content-Type': 'application/json',
}), responseType: 'blob'}).pipe (tap (
    // Log the result or error
    data => console.log('You received data'),
    error => console.log(error)
 )
)
}



downloadfile(url)
{
  this.download(url).subscribe(
    data => this.respData = data,
    (err) => console.log(err),
    () => {
      const blob = new Blob([this.respData], { type: 'application/octet-stream' });

   this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
    }
  )
}

}
