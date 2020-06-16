import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatFormFieldModule,MatInputModule } from '@angular/material'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OdrfrmComponent } from './odrfrm/odrfrm.component';
import { MyModule} from './material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NgOtpInputModule } from  'ng-otp-input';


import { HttpClientModule } from '@angular/common/http';
// import { BlogComponent } from './blog/blog.component';
import { SignupComponent } from './signup/signup.component';
// import { ArticleComponent } from './article/article.component';
// import { WorddocComponent } from './worddoc/worddoc.component';
import { LoginComponent } from './login/login.component';
// import { BlogviewComponent } from './blogview/blogview.component';
import { ProfileComponent } from './profile/profile.component';
import { NoteComponent } from './note/note.component';
import { AlphaComponent } from './alpha/alpha.component';
import { TrainersignupComponent } from './trainersignup/trainersignup.component';
import { TbkingclssComponent } from './tbkingclss/tbkingclss.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DescriptionComponent } from './description/description.component';
import { SearchclassComponent } from './searchclass/searchclass.component';
import { ForgotpsswdComponent } from './forgotpsswd/forgotpsswd.component';
import { EmailconfirmComponent } from './emailconfirm/emailconfirm.component';
import { PaymentComponent } from './payment/payment.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { ComplaintComponent } from './complaint/complaint.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ViewclassComponent } from './viewclass/viewclass.component';
import { BuyclsrmComponent } from './buyclsrm/buyclsrm.component';
// import { NevbarComponent } from './component/nevbar/nevbar.component';
// import { SidebarComponent } from './component/sidebar/sidebar.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { InfoComponent } from './info/info.component';
import { FeedbackpopupComponent } from './feedbackpopup/feedbackpopup.component';
import { ScheduleclassComponent } from './scheduleclass/scheduleclass.component';
import { BookclasspopupComponent } from './bookclasspopup/bookclasspopup.component';
import {MatVideoModule} from 'mat-video';
import { BuyclassdescpopComponent } from './buyclassdescpop/buyclassdescpop.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HelppopupComponent } from './helppopup/helppopup.component';
import { ContactuspopupComponent } from './contactuspopup/contactuspopup.component';
import { AccountdetailsComponent } from './accountdetails/accountdetails.component';
import { StudentsearchComponent } from './studentsearch/studentsearch.component';
import { StudentpostComponent } from './studentpost/studentpost.component';


import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider } from 'angular4-social-login';
import { DailyclassComponent } from './dailyclass/dailyclass.component';
import { StdntslistComponent } from './stdntslist/stdntslist.component';
import { RecordvComponent } from './recordv/recordv.component';


const google_oauth_client_id:string =  '66089437958-9qai3nufijclobprh164n62hfcparv6i.apps.googleusercontent.com' 



let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider(google_oauth_client_id)
  }
]);


export function provideConfig() {
  return config;
}


@NgModule({
  declarations: [
    AppComponent,
    OdrfrmComponent,
    // BlogComponent,
    SignupComponent,
    // ArticleComponent,
    // WorddocComponent,
    LoginComponent,
    // BlogviewComponent,
    ProfileComponent,
    NoteComponent,
    AlphaComponent,
    TrainersignupComponent,
    TbkingclssComponent,
    DashboardComponent,
    DescriptionComponent,
    SearchclassComponent,
    ForgotpsswdComponent,
    EmailconfirmComponent,
    PaymentComponent,
    UserprofileComponent,
    ComplaintComponent,
    FeedbackComponent,
    ViewclassComponent,
    BuyclsrmComponent,
    // NevbarComponent,
    // SidebarComponent,
    HeaderComponent,
    SidenavListComponent,
    HomeComponent,
    AboutComponent,
    InfoComponent,
    FeedbackpopupComponent,
    ScheduleclassComponent,
    BookclasspopupComponent,
    BuyclassdescpopComponent,
    HelppopupComponent,
    ContactuspopupComponent,
    AccountdetailsComponent,
    StudentsearchComponent,
    StudentpostComponent,
    DailyclassComponent,
    StdntslistComponent,
    RecordvComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    NgOtpInputModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MyModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatVideoModule,
    AngularFontAwesomeModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig,
    },
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: [] },
    
  ],
  bootstrap: [AppComponent],
  entryComponents:[AlphaComponent,SignupComponent,LoginComponent,PaymentComponent,DescriptionComponent,
  ComplaintComponent,FeedbackpopupComponent,BookclasspopupComponent,TrainersignupComponent,
  BuyclassdescpopComponent,HelppopupComponent,ContactuspopupComponent ,StudentpostComponent,AccountdetailsComponent,StdntslistComponent],
})
export class AppModule { }
