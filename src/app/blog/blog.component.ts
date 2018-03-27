import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  pageTitle = 'Blogs';
  breadcrumb = `<a class="breadcrumb-item" href="#">Home</a>
  <span class="breadcrumb-item active">Blogs</span>`;
  blogDetails:string;
  className:string;
  blogs = [];
  constructor(private dataService : DataService) { }

  ngOnInit() {
    this.getBlogs();
  }

  getBlogs(){
    this.dataService.getBlogs().subscribe(
      data=>{
        this.blogs = data;
      },
      err =>{
        console.log(err);
      },
      ()=>{
        console.log('completed')
      }
    )
  }

  getBlogDetails(event){
    console.log(event);
    console.log(event.target.parentNode.parentNode);


    let blogId = event.target.attributes['data-id'].value;
    let blogExpand = event.target.attributes['data-expand'].value;
    if(blogExpand =='true'){
      this.blogDetails = 'this is test blog details';
      this.className = 'in'; 
      event.target.attributes['data-expand'].value = false;
    }else{
      event.target.attributes['data-expand'].value = true;
      this.blogDetails = '';
      this.className = ''; 
    }   
  }

}
