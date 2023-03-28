import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouteRoutingModule } from './route-routing.module';
import { CommonModule } from '@angular/common';
import { DirectoryComponent } from './directory/directory.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, DirectoryComponent,AboutComponent,ContactComponent],
  imports: [BrowserModule, RouterModule, RouteRoutingModule, HttpClientModule, CommonModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
