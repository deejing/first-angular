import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './page/home/home.component';
import { PostsComponent } from './page/posts/posts.component';
import {
   MatMenuModule,
   MatButtonModule,
   MatIconModule,
   MatFormFieldModule,
   MatInputModule,
   MatCardModule
} from '@angular/material';
import { SearchComponent } from './search/search.component';

import { FormsModule } from '@angular/forms';
import { ItemComponent } from './item/item.component';
import { HttpClientModule } from '@angular/common/http';
import { UppercasePipe } from './uppercase.pipe';
import { CustomSelectedDirective } from './custom-selected.directive';

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      PostsComponent,
      SearchComponent,
      ItemComponent,
      UppercasePipe,
      CustomSelectedDirective
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      MatButtonModule,
      MatIconModule,
      MatMenuModule,
      MatCardModule,
      MatFormFieldModule,
      MatInputModule,
      FormsModule,
      HttpClientModule
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }
