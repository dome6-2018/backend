import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
// Layouts
import {FrontLayoutComponent} from './front/layout/layout.component';
import {DashboardLayoutComponent} from './dashboard/layout/layout.component';
import {CanActivateAuthGuard} from './common/services/auth-guard.service';

export const routes: Routes = [
    {
        path: '',
        component: FrontLayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'login',
                pathMatch: 'full',
            }, {
                path: '',
                loadChildren: './front/security/security.module#SecurityModule'
            }
        ]
    }, {
        path: 'app',
        component: DashboardLayoutComponent,
        canActivate: [CanActivateAuthGuard],
        data: {
            title: 'Home'
        },
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full',
            },
            {
                path: 'home',
                loadChildren: './dashboard/home/home.module#HomeModule'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
