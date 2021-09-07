import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { BannerComponent } from './banner/banner.component';
import { ServicesComponent } from './services/services.component';
import { DemoComponent } from './demo/demo.component';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [
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
export class HomeModule { }
