import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

// Component
import { HeaderComponent } from './header/header.component';
import { ContactsComponent } from './contacts/contacts.component';
import { PhotosComponent } from './photos/photos.component';

// Service
// import { ContactsService } from './contacts.service';
// import { PhotosService } from './photos.service';
// import { Contacts } from './contacts.model';

// @angular/Matrial
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {
  // MatTabsModule,
  // MatCardModule,
  // MatTableModule } from '@angular/material/';
// import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    routingComponents,
    ContactsComponent,
    PhotosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    // BrowserAnimationsModule,
    // MatTabsModule,
    // MatCardModule,
    // MatTableModule
  ],
  providers: [
    // ContactsService,
    // PhotosService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
