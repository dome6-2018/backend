import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ToasterModule} from 'angular2-toaster';
import {LoginComponent} from './components/login/login.component';
import {SecurityRoutingModule} from './security-routing.module';

@NgModule({
    imports: [
        SecurityRoutingModule,
        FormsModule,
        ToasterModule
    ],
    declarations: [LoginComponent]
})
export class SecurityModule {
}
