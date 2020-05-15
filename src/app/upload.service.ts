// import { Injectable } from "@angular/core";
// import { ActivatedRoute, Router } from '@angular/router';
// import { Http, Headers, Response, Request, RequestMethod, URLSearchParams, RequestOptions } from "@angular/http";
// // import {Observable} from 'rxjs/Rx';
// // import { Constants } from './constants';
// declare var $: any;

// @Injectable()
// export class UplaodService {
//   requestUrl: string;
//   responseData: any;
//   handleError: any;

//   constructor(private router: Router, 
//   private http: Http, 
//   private constants: Constants, 
//   ) {
//     this.http = http;
//   }

//   postWithFile (url: string, postData: any, files: File[]) {

//     let headers = new Headers();
//     let formData:FormData = new FormData();
//     formData.append('files', files[0], files[0].name);
//     // For multiple files
//     // for (let i = 0; i < files.length; i++) {
//     //     formData.append(`files[]`, files[i], files[i].name);
//     // }

//     if(postData !=="" && postData !== undefined && postData !==null){
//       for (var property in postData) {
//           if (postData.hasOwnProperty(property)) {
//               formData.append(property, postData[property]);
//           }
//       }
//     }
//     var returnReponse = new Promise((resolve, reject) => {
//       this.http.post(this.constants.root_dir + url, formData, {
//         headers: headers
//       }).subscribe(
//           res => {
//             this.responseData = res.json();
//             resolve(this.responseData);
//           },
//           error => {
//             this.router.navigate(['/login']);
//             reject(error);
//           }
//       );
//     });
//     return returnReponse;
//   }
// }