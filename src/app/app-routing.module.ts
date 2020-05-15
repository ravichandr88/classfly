import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OdrfrmComponent } from './odrfrm/odrfrm.component';
import { BlogComponent } from './blog/blog.component';
import { SignupComponent } from './signup/signup.component';
import { ArticleComponent } from './article/article.component';
import { WorddocComponent } from './worddoc/worddoc.component';
import { LoginComponent } from './login/login.component';
import { BlogviewComponent } from './blogview/blogview.component';
import { ProfileComponent } from './profile/profile.component';
import { NoteComponent } from './note/note.component';
import { AlphaComponent } from "./alpha/alpha.component";
import { TrainersignupComponent } from "./trainersignup/trainersignup.component";
import { TbkingclssComponent } from "./tbkingclss/tbkingclss.component"; 
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchclassComponent } from './searchclass/searchclass.component';
import { ForgotpsswdComponent } from './forgotpsswd/forgotpsswd.component';
import { EmailconfirmComponent } from './emailconfirm/emailconfirm.component';
import { PaymentComponent } from './payment/payment.component';
import { ComplaintComponent } from './complaint/complaint.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { BuyclsrmComponent } from './buyclsrm/buyclsrm.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component'
import { DescriptionComponent} from'./description/description.component';
import { FeedbackpopupComponent} from './feedbackpopup/feedbackpopup.component';
import { ScheduleclassComponent } from './scheduleclass/scheduleclass.component';
import {BookclasspopupComponent} from './bookclasspopup/bookclasspopup.component';
import { AccountdetailsComponent} from './accountdetails/accountdetails.component';
import {StudentsearchComponent} from './studentsearch/studentsearch.component';
import {StudentpostComponent} from'./studentpost/studentpost.component';
import {DailyclassComponent } from './dailyclass/dailyclass.component';
import { RecordvComponent } from './recordv/recordv.component';


const routes: Routes = [
  {
    path:'record',
    component:RecordvComponent
  },
  {
    path:'daily',
    component:DailyclassComponent
  }
  ,
  {
    path:'studentp',
    component:StudentpostComponent
  },
  {
    path:'studentdash',
    component:StudentsearchComponent
  },
  {
    path:'accountdetails',
    component:AccountdetailsComponent
  },
  {
    path:'bookclasspop',
    component:BookclasspopupComponent
  },

  {
    path:'scheduleclass',
    component:ScheduleclassComponent
  },

  {
    path:'feedpop',
    component:FeedbackpopupComponent
  },

  {
    path:'desc',
    component:DescriptionComponent
  },
  {
    path:'', 
    component:HomeComponent
  },
  {
    path:'about', 
    component:AboutComponent
  },
  // {
  //   path:'buyclassroom', 
  //   component:BuyclsrmComponent
  // }
  // ,
  {
    path:'complaint',
    component:ComplaintComponent
  }
  ,
  {
    path:'feedback',
    component:FeedbackComponent

  },
  {
    path:'confirmemail/:sess',
    component:EmailconfirmComponent
  },
  // {
  //   path:'trainersignup',
  //   component:TrainersignupComponent
  // }
  // ,
  {
    path:'alpha',
    component:AlphaComponent
  }
  ,
  {
    path:'order',
    component:OdrfrmComponent
  }
  ,
  {
    path:'note',
    component:NoteComponent
  }
  ,
  {
    path:'blog',
    component:BlogComponent
  },
  // {
  //   path:'signup',
  //   component:SignupComponent
  // },
  {
    path:'blogs',
    component:ArticleComponent
  },
  {
    path:'article',
    component:WorddocComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'articles',
    component:BlogviewComponent
  },
  {
    path:'profile',
    component:ProfileComponent
  },
  {
    path:'trainersignup/:access_token/:session_id',
    component:TrainersignupComponent
  }
  ,
  {
    path:'trainerbooking',
    component:TbkingclssComponent
  },
  {
    path:'dash',
    component:DashboardComponent
  },
  {
    path:'search',
    component:SearchclassComponent
  },
  {
    path:'forgotpassword',
    component:ForgotpsswdComponent
  },
  {
    path:'payment',
    component:PaymentComponent
  },
  {
    path:'dcp',
    component:TrainersignupComponent
  },
  {
    path:'buy',
component:BuyclsrmComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



// ERROR in src\app\signup\signup.component.html(78,31): : Expected 1 arguments, but got 0.
// src\app\dashboard\dashboard.component.html(13,48): : Property 'curntdayatnd' does not exist on type 'Object'.
// src\app\dashboard\dashboard.component.html(35,48): : Property 'curntdayatnd' does not exist on type 'Object'.
// src\app\dashboard\dashboard.component.html(94,48): : Property 'curntdaytke' does not exist on type 'Object'.
// src\app\dashboard\dashboard.component.html(121,48): : Property 'curntdaytke' does not exist on type 'Object'.
// src\app\dashboard\dashboard.component.html(160,48): : Property 'clastotke' does not exist on type 'Object'.
// src\app\dashboard\dashboard.component.html(184,48): : Property 'clastotke' does not exist on type 'Object'.
// src\app\dashboard\dashboard.component.html(219,48): : Property 'clastoatnd' does not exist on type 'Object'.
// src\app\dashboard\dashboard.component.html(243,48): : Property 'clastoatnd' does not exist on type 'Object'.
// src\app\dashboard\dashboard.component.html(276,48): : Property 'clastook' does not exist on type 'Object'.
// src\app\dashboard\dashboard.component.html(299,48): : Property 'clastook' does not exist on type 'Object'.
// src\app\dashboard\dashboard.component.html(330,48): : Property 'clasatnd' does not exist on type 'Object'.
// src\app\dashboard\dashboard.component.html(353,48): : Property 'clasatnd' does not exist on type 'Object'.
// src\app\complaint\complaint.component.html(8,19): : Property 'report' does not exist on type 'ComplaintComponent'.
// src\app\complaint\complaint.component.html(14,101): : Property 'dcp' does not exist on type 'ComplaintComponent'.
// src\app\complaint\complaint.component.html(21,97): : Property 'dcp' does not exist on type 'ComplaintComponent'.
// src\app\complaint\complaint.component.html(14,101): : Property 'dcp' does not exist on type 'ComplaintComponent'.
// src\app\complaint\complaint.component.html(21,97): : Property 'dcp' does not exist on type 'ComplaintComponent'.
// src\app\complaint\complaint.component.html(24,67): : Property 'print' does not exist on type 'ComplaintComponent'.
// src\app\complaint\complaint.component.html(28,63): : Property 'print' does not exist on type 'ComplaintComponent'.
// src\app\about\about.component.html(125,78): : Property 'dcp' does not exist on type 'AboutComponent'.
// src\app\about\about.component.html(125,78): : Property 'dcp' does not exist on type 'AboutComponent'.
// src\app\feedbackpopup\feedbackpopup.component.html(93,55): : Property 'print' does not exist on type 'FeedbackpopupComponent'.
// src\app\bookclasspopup\bookclasspopup.component.html(24,78): : Property 'sub' does not exist on type 'BookclasspopupComponent'.
// src\app\bookclasspopup\bookclasspopup.component.html(29,75): : Property 'tpc' does not exist on type 'BookclasspopupComponent'.
// src\app\bookclasspopup\bookclasspopup.component.html(37,77): : Property 'tpc' does not exist on type 'BookclasspopupComponent'.
// src\app\bookclasspopup\bookclasspopup.component.html(45,68): : Property 'dcp' does not exist on type 'BookclasspopupComponent'.
// src\app\bookclasspopup\bookclasspopup.component.html(24,78): : Property 'sub' does not exist on type 'BookclasspopupComponent'.
// src\app\bookclasspopup\bookclasspopup.component.html(29,75): : Property 'tpc' does not exist on type 'BookclasspopupComponent'.
// src\app\bookclasspopup\bookclasspopup.component.html(37,77): : Property 'tpc' does not exist on type 'BookclasspopupComponent'.
// src\app\bookclasspopup\bookclasspopup.component.html(45,68): : Property 'dcp' does not exist on type 'BookclasspopupComponent'.
// src\app\contactuspopup\contactuspopup.component.html(21,76): : Property 'dcp' does not exist on type 'ContactuspopupComponent'.
// src\app\contactuspopup\contactuspopup.component.html(21,76): : Property 'dcp' does not exist on type 'ContactuspopupComponent'.
// src\app\accountdetails\accountdetails.component.html(13,54): : Property 'ifsc' does not exist on type 'Object'.
// src\app\accountdetails\accountdetails.component.html(17,67): : Property 'accno' does not exist on type
// 'Object'.
// src\app\accountdetails\accountdetails.component.html(20,75): : Property 'accno2' does not exist on type 'Object'.
// src\app\accountdetails\accountdetails.component.html(24,71): : Property 'name' does not exist on type 'Object'.
// src\app\accountdetails\accountdetails.component.html(28,66): : Property 'upi' does not exist on type 'Object'.
// src\app\accountdetails\accountdetails.component.html(31,64): : Property 'phone' does not exist on type
// 'Object'.
// src\app\accountdetails\accountdetails.component.html(13,54): : Property 'ifsc' does not exist on type 'Object'.
// src\app\accountdetails\accountdetails.component.html(17,67): : Property 'accno' does not exist on type
// 'Object'.
// src\app\accountdetails\accountdetails.component.html(20,75): : Property 'accno2' does not exist on type 'Object'.
// src\app\accountdetails\accountdetails.component.html(24,71): : Property 'name' does not exist on type 'Object'.
// src\app\accountdetails\accountdetails.component.html(28,66): : Property 'upi' does not exist on type 'Object'.
// src\app\accountdetails\accountdetails.component.html(31,64): : Property 'phone' does not exist on type
// 'Object'.
// src\app\studentpost\studentpost.component.html(12,74): : Property 'sub' does not exist on type 'StudentpostComponent'.
// src\app\studentpost\studentpost.component.html(17,71): : Property 'tpc' does not exist on type 'StudentpostComponent'.
// src\app\studentpost\studentpost.component.html(23,90): : Property 'dcp' does not exist on type 'StudentpostComponent'.
// src\app\studentpost\studentpost.component.html(12,74): : Property 'sub' does not exist on type 'StudentpostComponent'.
// src\app\studentpost\studentpost.component.html(17,71): : Property 'tpc' does not exist on type 'StudentpostComponent'.
// src\app\studentpost\studentpost.component.html(23,90): : Property 'dcp' does not exist on type 'StudentpostComponent'.