import { Component, OnInit, OnDestroy} from '@angular/core';
import { DataService } from '../data.service';



@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {


  constructor(private data:DataService) { }

  response 
  blogs 
  blog
  blogsT :boolean = true
  blogI :boolean = false
  comment : string 

  ngOnInit() {



    this.data.blogs().subscribe(
      data => this.response = data,
      (err) => console.log(err),
      () => {
        this.success(this.response)
      }
    )

    
  }


  success(resp)
  {
    if(resp.status == 'success')
    {
      this.blogs = resp.blog
      this.blogsT = true
    }
  }


  bresponse : Object

  blogId(id)
  {
  this.data.blogid(id).subscribe(
    data => this.bresponse = data,
    (err) => console.log(err),
    () => {
      this.blogI = true
      this.blogsT = false
        this.bsuccess(this.bresponse)
    }
  )
  }

 
  bsuccess(resp)
  {
    if(resp.status == 'success')
    {

      this.blogI = true

      this.blog = resp.blog

    } 
  }



  back()
  {
    this.blogI = false
    this.blogsT = true
  }

  cmt_rspn : Object

  add_comment()
  {
    var dat = {
      'session_key':sessionStorage.getItem('user'),
      'blog': this.blog.id,
      'comment': this.comment,
    }
    this.data.comment(dat).subscribe(
      data => this.cmt_rspn = data,
      (err)  => console.log(err),
      () => {
        this.success_cmt(this.cmt_rspn)
      }
    )
  }


  success_cmt(resp)
  {
    if(resp.status == 'error')
    {
      alert(resp.message)
    }
    else
    {
      this.blogId(this.blog.id)
      this.comment = ''
      console.log('Submited comment')
    }
  }
}
