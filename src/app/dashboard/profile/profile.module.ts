import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CardModule} from 'ngx-card';
import {MatDatepickerModule, MatNativeDateModule} from '@angular/material';

import {ProfileRoutingModule} from './profile-routing.module';
import {ProfileMenuComponent} from './components/menu/menu.component';
import {ProfileInfosComponent} from './components/infos/infos.component';
import {ProfilePasswordComponent} from './components/password/password.component';

@NgModule({
    imports: [
        CommonModule,
        ProfileRoutingModule,
        FormsModule,
        MatNativeDateModule,
        MatDatepickerModule,
        CardModule
    ],
    exports: [RouterModule],
    declarations: [
        ProfileMenuComponent, ProfileInfosComponent, ProfilePasswordComponent]
})
export class ProfileModule {
}
