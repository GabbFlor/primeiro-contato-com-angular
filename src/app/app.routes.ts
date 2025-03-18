import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SobreNosComponent } from './components/sobre-nos/sobre-nos.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "sobre-nos",
        component: SobreNosComponent
    },
];
