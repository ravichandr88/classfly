import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError ,BehaviorSubject }  from 'rxjs';
import { catchError,map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {



  constructor( private http:HttpClient) { }






// Error Handler
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        'Backend returned code ${error.status}, ' +
        'body was: ${error.error}');
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };














  
  link(data)
  {
    // let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    // headers.append('Access-Control-Allow-Origin','*');
    // headers.append('Host','www.linkedin.com')

    let headers = new HttpHeaders({
    // 'Access-Control-Allow-Origin':'*',
    'Host':'www.linkedin.com',
    'Content-Type':'application/x-www-form-urlencoded'
  })
   
    
 var f = {
  'grant_type':'authorization_code',
  'redirect_uri':'http%3A%2F%2Flocalhost%3A4200%2Fdcp',
  'client_id':'77ml0pujhg3d8h',
 'client_secret':'ZbN7FHCyOkwziCP7',
 'code':data
 }
  console.log(data)
   return this.http.post('https://www.linkedin.com/oauth/v2/accessToken?client_id=77ml0pujhg3d8h&grant_type=authorization_code&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Fdcp&client_secret=ZbN7FHCyOkwziCP7&code='+data,f,{headers})
  }
//http%3A%2F%2Flocalhost%3A4200%2Fdcp  


//linkedin profile api

getprofile()
{
  return this.http.get("https://api.linkedin.com/v2/me?access")
}

getpic(token)
{
  return this.http.get("https://api.linkedin.com/v2/me?projection=(id,profilePicture(displayImage~:playableStreams))&oauth2_access_token="+token)
}










  domain = "http://127.0.0.1:8000/api/"
    // domain ='https://datafly.herokuapp.com/api/'
  //https://medium.com/angular-in-depth/optimize-angular-bundle-size-in-4-steps-4a3b3737bf45
//https://stackoverflow.com/questions/44758755/how-to-enable-gzip-compression-in-angular-cli-for-production-build
    postData(data)
    {
       return this.http.post(this.domain +  "order",data).pipe(catchError(this.handleError))
    }

    signup(data)
    {
      return this.http.post(this.domain + 'signup',data).pipe(catchError(this.handleError))
    }

    blog(data)
    {
      return this.http.post(this.domain + 'blog',data).pipe(catchError(this.handleError))
    }

    login(data)
    {
      return this.http.post(this.domain + 'login',data).pipe(catchError(this.handleError))
    }

    blogs()
    {
      return this.http.get(this.domain + 'blog').pipe(catchError(this.handleError))
    }

    blogid(data)
    {
      return this.http.get(this.domain+'blog/'+data).pipe(catchError(this.handleError))
    }

    comment(data)
    {
      return this.http.post(this.domain+'comment',data).pipe(catchError(this.handleError))
    }

    userdetail(data)
    {
      return this.http.post(this.domain + 'userdetail',data).pipe(catchError(this.handleError))
    }

    article(data)
    {
      console.log(data)
      return this.http.post<any>(this.domain +'article',data).pipe(catchError(this.handleError))
    }

    get_article()
    {
      return this.http.get(this.domain+'articles').pipe(catchError(this.handleError))
    }

    reset_paasword(email)
    {
     var data={'email':email}
      return this.http.post(this.domain+'reset_password',data).pipe(catchError(this.handleError))
    }

    confirmemail(sess)
    {
      return this.http.get(this.domain+'mail/'+sess).pipe(catchError(this.handleError))
    }
    

    changepassword(password)
    {
      return this.http.post(this.domain+'password',password)
    }

    trainersignup(data)
    {
     return this.http.post(this.domain+'trainersignup',data).pipe(catchError(this.handleError))
    }

    trainer()
    {
      var data={'session_key':sessionStorage.getItem('user')}
      return this.http.post(this.domain+'trainer',data).pipe(catchError(this.handleError))
    }
    //get the free date and time for free level trainer
    timetable(tid = sessionStorage.getItem('tid'))
    {
      
      return this.http.get(this.domain+'class/'+tid).pipe(catchError(this.handleError))
    }
    // weekdates
    weekdates()
    {
      return this.http.get(this.domain+'weekdates').pipe(catchError(this.handleError))
    }
    // freeclass/<int:tid>/<slug:day>
    dayhours(tid,day)
    {
      return this.http.get(this.domain+'freeclass/'+tid+'/'+day).pipe(catchError(this.handleError))
    }
    // datespaid/<int:tid>
    paiddates()
    {
      return this.http.get(this.domain+'datespaid/'+sessionStorage.getItem('tid')).pipe(catchError(this.handleError))
    }

    //to book classes

    bookfreeclass(data)
    {
      return this.http.post(this.domain+'bookfreeclass',data).pipe(catchError(this.handleError))
    }

    bookpaidclass(data)
    {
      return this.http.post(this.domain+'bookpaidclass',data).pipe(catchError(this.handleError))
    }
    //api/class/<slug:sub>/<slug:tpc>/<slug:lang>
    searchall(typ,sub,tpc,lang)
    {
      if(tpc=='' && lang=='')
      {
        return this.http.get(this.domain+'classes/'+typ+'/'+sub).pipe(catchError(this.handleError))
      }
      else if(lang == '') 
      {
        return this.http.get(this.domain+'classes/'+typ+'/'+sub+"/"+tpc).pipe(catchError(this.handleError))
      }
      else if(tpc=='')
      {
        return this.http.get(this.domain+'classesl/'+sub+'/'+lang).pipe(catchError(this.handleError))
      }
      else{
        return this.http.get(this.domain+'classes/'+typ+'/'+sub+'/'+tpc+'/'+lang).pipe(catchError(this.handleError))
      }
    }

    hostclass(cid,typ)
    {
      return this.http.get(this.domain+'host/'+cid+'/'+typ).pipe(catchError(this.handleError))
    }


    ubookclass(data)
    {
      return this.http.post(this.domain+'register',data).pipe(catchError(this.handleError))
    }

    fbookclass(data)
    {
      return this.http.post(this.domain+'fregister',data).pipe(catchError(this.handleError))
    }

    buyclsdetails()
    {
      return this.http.get(this.domain+'buyclassdetails').pipe(catchError(this.handleError))
    }

    buyclassroom(tid,pid)
    {
      return this.http.get(this.domain + 'buyclassroom/'+tid+'/'+pid).pipe(catchError(this.handleError))
    }
    feedback(data)
    {
      return this.http.post(this.domain+'feedback',data).pipe(catchError(this.handleError))
    }
    feedabackdetails()
    {
      return this.http.post(this.domain+'feedbackdetails',{'session_key':sessionStorage.getItem('user')}).pipe(catchError(this.handleError))
    }

    dashboard()
    {
      return this.http.post(this.domain+'dashboard',{'session_key':sessionStorage.getItem('user')}).pipe(catchError(this.handleError))
    }

    traineracc(data)
    {
      return this.http.post(this.domain+'traineracc',data).pipe(catchError(this.handleError))
    }

    classdetails(data)
    {
      return this.http.post(this.domain+'classdetails',data).pipe(catchError(this.handleError))
    }

    create_request(data)
    {
      return this.http.post(this.domain+'requestclass',data).pipe(catchError(this.handleError))
    }

    getmentorclass()
    {
      return this.http.get(this.domain+'mentoring').pipe(catchError(this.handleError))
    }
    //api/buymentorclass
    buymentorclass(data)
    {
      return this.http.post(this.domain+'buymentorclass',data).pipe(catchError(this.handleError))
    }

    //get the paid classes
    paidclasses()
    {
      return this.http.get(this.domain+'classesl').pipe(catchError(this.handleError))
    }

    //to get the registered students for specific class
    getstdlist(data)
    {
      return this.http.post(this.domain+'studentlist',data).pipe(catchError(this.handleError))
    }

    getusrdtls()
    {
      return this.http.post(this.domain+'usrdtls',{'session_key':sessionStorage.getItem('user')}).pipe(catchError(this.handleError))
    }

    //initial srarch page
    initialserach()
    {
      return this.http.get(this.domain+'search').pipe(catchError(this.handleError))
    }



    weektable()
    {
      return this.http.post(this.domain+'weektable',{'session_key':sessionStorage.getItem('user')}).pipe(catchError(this.handleError))
    }

    update_table(data)
    {
      return this.http.post(this.domain+'updatetable',data).pipe(catchError(this.handleError))
    }

    //image upload url
    get_imgurl(filename)
    {
      return this.http.post(this.domain+'imgurl',{'session_id':sessionStorage.getItem('user'),'filename':filename}).pipe(catchError(this.handleError))
    }


    //email otp verification
    verify_email_otp(data)
    {
      return this.http.post(this.domain+'verify_otp',data)
    }
    //api to verify otp with username and email
    username_email_otp(data)
    {
      return this.http.post(this.domain+'username_email_otp',data)
    }
    

    resend_email_otp(data)
    {
      return this.http.post(this.domain+'resendmail',data)
    }


    //verify otp for the password forgottne user
    verify_frgt_otp(data)
    {
      return this.http.post(this.domain+'verify_forgot_otp',data)
    }
    //kii  code to signup
    
    kiisignup(phone)
    {
      let headers = new HttpHeaders({
        "Authorization": "Basic a21qdWZ4aHVqOTExOjY4MjY3ZWQ5NmVmOTQ4M2VhYjE1OWVkMjdlN2U0ODgz" ,
        "Content-Type": "application/vnd.kii.RegistrationRequest+json" 
      })
      var d = {
        "loginName": sessionStorage.getItem('username'),
        "displayName": "good",
        "country": "IN",
        "password": "ivarreddy",
     "phoneNumber": phone
      }

      return this.http.post('https://api-jp.kii.com/api/apps/kmjufxhuj911/users',d,{headers})

    }

    kiilogin()
    {
      let headers = new HttpHeaders({
        "Authorization": "Basic a21qdWZ4aHVqOTExOjY4MjY3ZWQ5NmVmOTQ4M2VhYjE1OWVkMjdlN2U0ODgz" ,
        "Content-Type": "application/json"
      })

      var d={ 
        "grant_type" : "password",
      "username": sessionStorage.getItem('username'),
      "password": "ivarreddy"
    }

    return this.http.post('https://api-jp.kii.com/api/apps/kmjufxhuj911/oauth2/token',d,{headers})

    }

    Kiiverify(data)
    {
      // data={'session':"user session key from Kii"
    // code: otp code}
    let headers = new HttpHeaders({
        "Authorization": "Bearer "+data['session'],
 "Content-Type": "application/vnd.kii.AddressVerificationRequest+json" 
      })

      var d = {
        "verificationCode": data['code']
      }

      return this.http.post('https://api-jp.kii.com/api/apps/kmjufxhuj911/users/me/phone-number/verify',d,{headers})
    }


    kiiresendotp(data)
    {
      var url = 'https://api-jp.kii.com/api/apps/kmjufxhuj911/users/me/phone-number/resend-verification'
      let headers = new HttpHeaders({
        "Authorization": "Bearer "+data['session'],
 "Content-Type": "application/vnd.kii.AddressVerificationRequest+json" 
      })
      return this.http.post(url,{},{headers})
    }


    kiideleteuser(data)
    {
      let headers = new HttpHeaders({
        "Authorization": "Bearer "+data['session']})
      return this.http.delete("https://api-jp.kii.com/api/apps/kmjufxhuj911/users/me",{headers})
    }

}

//AQXIPo4Hpi6kgXDROksIHruQ6txCx6QLE6fJ37VCNrepTIYya4Hnf4QOgnXPcmBeNcFZsVPOn_c2UKMIA8jrARifUzMl3J6EWHVW5ylATF82diywg1rvQ4PeMNd1FIq5Db0LIWlcgm4jv79Jmbsxwkj5TiGmumYapv5QoWt-JatfcjqNAnlHDqTDuElgREcht7KsRte9uUUMeyVN3nXHlSci7az16T9qYXs2XNRSv88CJ_lEfKISi0H_pwS3gCb7i84ck4Gh19wV6pkVPPBtmc7iIJdjzBhvHiuvcf0v7nPXVXpGo8yk4I4EF5S5_0qR6QAAtX-oa97xK7AT0-mQab3J_tz4gA
