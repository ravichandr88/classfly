import { Component , HostListener } from '@angular/core';
import { Router} from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { SharedService } from './shared.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'uptown';

  onMain: boolean = false;
  hin:number = 0
  constructor(private service: SharedService,private router : Router) {
    service.onLoginEvent.subscribe(
      (onMain) => { 
        this.onMain = onMain;
        this.user = true
        if(sessionStorage.getItem('tid') != null)
        {
          this.tid = true
        }
      }
   );
 }

  // constructor( )
  // {
    
  // }
 
  laptop:boolean = true
  user:boolean = false
  tid:boolean = false
  subscription
  ngOnInit()
  {
   
   if(sessionStorage.getItem('user') != null)
   {
     this.user = true
     if(sessionStorage.getItem('tid') != null)
     {
       this.tid = true
     }
   }

   if(window.innerWidth < 500)
   {
     this.laptop = false
   }
  }

  @HostListener('window:resize', ['$event'])
    onResize(event) {
        if (event.target.innerWidth < 500) {
            this.laptop = false
        }
        else if (event.target.innerWidth >= 500) {
          this.laptop = true
      }
    }

 
  // logout()
  // {
  //   console.log('Logged out')
  //   sessionStorage.removeItem('user')
  //   sessionStorage.removeItem('tid')
  //   this.user = null
  //   this.router.navigate([''])
  //   window.location.reload();
  //   this.service.onLogoutEvent.emit(true)
    
  // }
}
