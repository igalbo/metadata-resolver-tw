import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { appRoutingModule } from './app.routing';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddUrlComponent } from './add-url/add-url.component';
import { InfoBoxComponent } from './info-box/info-box.component';

@NgModule({
  imports: [BrowserModule, HttpClientModule, FormsModule, appRoutingModule],
  declarations: [
    AppComponent,
    HomeComponent,
    AddUrlComponent,
    InfoBoxComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
