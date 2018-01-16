import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProfileInfosComponent} from './components/infos/infos.component';
import {ProfilePasswordComponent} from './components/password/password.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'infos'
    }, {
        path: 'infos',
        component: ProfileInfosComponent,
        data: {
            title: 'Informations personnelles'
        }
    }, {
        path: 'password',
        component: ProfilePasswordComponent,
        data: {
            title: 'Mot de passe'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProfileRoutingModule {
}
