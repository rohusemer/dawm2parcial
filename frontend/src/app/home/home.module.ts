import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BannerComponent } from './banner/banner.component';
import { ServicesComponent } from './services/services.component';
import { DemoComponent } from './demo/demo.component';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [
    NavBarComponent,
    BannerComponent,
    ServicesComponent,
    DemoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: []
})
