import { Component, OnInit, ElementRef } from '@angular/core';
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
  blogDetails: string;
  className: string;
  blogs = [];
  constructor(private dataService: DataService, private elRef: ElementRef) { }

  ngOnInit() {
    this.getBlogs();
  }

  getBlogs() {
    this.dataService.getBlogs().subscribe(
      data => {
        this.blogs = data;
      },
      err => {
        console.log(err);
      },
      () => {
        console.log('completed');
      }
    );
  }

  getBlogDetails(event) {
    const blogId = event.target.attributes['data-id'].value;
    const blogExpand = event.target.attributes['data-expand'].value;
    const emlement = this.elRef.nativeElement.querySelector('#collapse' + blogId);

    if (blogExpand === 'true') {
      emlement.html = 'this is test blog details';
      emlement.className = 'panel-collapse collapse in';
      event.target.attributes['data-expand'].value = false;
    } else {
      event.target.attributes['data-expand'].value = true;
      this.blogDetails = '';
      emlement.className = 'panel-collapse collapse';
    }
  }

}
