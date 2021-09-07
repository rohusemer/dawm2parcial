import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { appRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { MessageService } from './services/message.service';

import { NavBarComponent } from './home/nav-bar/nav-bar.component';
import { BannerComponent } from './home/banner/banner.component';
import { ServicesComponent } from './home/services/services.component';
import { DemoComponent } from './home/demo/demo.component';
import { FooterComponent } from './home/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { EquipoComponent } from './equipo/equipo.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
<<<<<<< HEAD
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
=======

>>>>>>> f41487eb16c54caf180e60dd3d0804c8a1fd2951
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BannerComponent,
    ServicesComponent,
    DemoComponent,
    FooterComponent,
    HomeComponent,
    NoticiasComponent,
    EquipoComponent,
    ContactanosComponent,
<<<<<<< HEAD
    LoginComponent,
    RegistroComponent
=======
>>>>>>> f41487eb16c54caf180e60dd3d0804c8a1fd2951
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    appRoutingModule,
    FormsModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
