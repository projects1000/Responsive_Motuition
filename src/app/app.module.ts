import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Import BrowserAnimationsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CardComponent } from './card/card.component';
import { CbseComponent } from './insideCard/cbse/cbse.component';
import { MatIconModule } from '@angular/material/icon'; // Import MatIconModule
import { MenubarComponent } from './common/menubar/menubar.component';
import { SubjectInfoComponent } from './subject-info/subject-info.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    CardComponent,
    CbseComponent,
    MenubarComponent,
    SubjectInfoComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add this line
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Add FormsModule here
    MatIconModule, // Add MatIconModule here
    BrowserAnimationsModule // Add BrowserAnimationsModule here
  ],
  providers: [],
  bootstrap: [AppComponent] // Only AppComponent should be bootstrapped
})
export class AppModule { }
