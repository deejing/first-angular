import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../api.service';
import {Posts} from '../../posts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

   private posts: Array<Posts>;
   private _posts: Array<Posts>;

   constructor(
      private apiService: ApiService
   ) { }

   searchValue(value: string) {
      if (value && value.length > 3) {
         this.posts = this._posts.filter(post => {
            return post.title.includes(value);
         });
      } else {
         this.posts = this._posts;
      }
   }

   ngOnInit() {
      this.apiService.getPosts().subscribe(response => {
         this.posts = response;
         this._posts = response;
      });
   }

   trackByFn = (index, item: Posts) => {
      return item.id;
   }

}
