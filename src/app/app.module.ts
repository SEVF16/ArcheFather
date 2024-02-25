import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './library/component/header/header.component';
import { FooterComponent } from './library/component/footer/footer.component';
import { SidenavComponent } from './library/component/sidenav/sidenav.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,


  ],

  providers: [],
  bootstrap: [AppComponent,]
})
export class AppModule { }
