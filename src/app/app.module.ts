/*
THE SEMBLANCE PROJECT
Author: 'me@elwoodberry.com'
This code is brought to you by Elwood Berry @www.elwoodberry.com 
*/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

// ASSETS
import { MaterialLibraryModule } from '../assets/libs/material/material-library/material-library.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialLibraryModule,
    FlexLayoutModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

/*
-------------------------------------------------
Copyright 2021 ElwoodBerry.com LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that can be found in the LICENSE file at http://www.elwoodberry.com 

*/
