import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { NoticiasComponent } from './noticias';

import { EquipoComponent } from './equipo';
import { ContactanosComponent } from './contactanos';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'noticias', component: NoticiasComponent },

    { path: 'equipo', component: EquipoComponent },

    { path: 'contactanos', component: ContactanosComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
