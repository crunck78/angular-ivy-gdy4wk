import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { PortofolioComponent } from './portofolio/portofolio.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, MenuComponent, HomeComponent, SlideShowComponent, PortofolioComponent, FooterComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
