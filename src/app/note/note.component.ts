import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  constructor() { }
  note =''

  notelist=[]
  ngOnInit() {
  }

  add()
  {
    var utcstr = (new Date()).toUTCString()
    
    this.notelist.push({'note':this.note,'time':utcstr})
    this.note=''
  }



  keyPress(event:any)
  {
    var x = String.fromCharCode(event.charCode);
    if(x=='control')
    {
      console.log('comtrol')
    }
    else{
      console.log(x)
    }
  }

  cntrl()
  {
    console.log('console and /')
  }

plst = []

  code()
  {
    this.plst.push([true,this.note])
    console.log(this.plst)
    this.note=''
  }

  autogrow(){
    let  textArea = document.getElementById("textarea")       
    textArea.style.overflow = 'hidden';
    textArea.style.height = '0px';
    textArea.style.height = textArea.scrollHeight + 'px';
  }

  getlen()
  {
    var k = []
    for( var x = 0; x <this.plst.length;x++)
    {
      k.push(x)
    }
    return k
  }

  //function to change the visibility of the list item as a paragraph and textarea
  change(l)
  {
    this.plst[l][0] = this.plst[l][0] ? false : true
    
  }



  
  
  


}
