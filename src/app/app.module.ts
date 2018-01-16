import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app.routing';
import {FrontLayoutComponent} from './front/layout/layout.component';
import {ToasterModule} from 'angular2-toaster/angular2-toaster';
import {TokenService} from './common/services/token.service';
import {UserService} from './common/services/user.service';
import {CanActivateAuthGuard} from './common/services/auth-guard.service';
import {DashboardLayoutComponent} from './dashboard/layout/layout.component';
import {CKEditorModule} from 'ng2-ckeditor';

import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {TabsModule} from 'ngx-bootstrap/tabs';
import {ModalModule} from 'ngx-bootstrap/modal';
import {PopoverModule} from 'ngx-bootstrap/popover';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppHeaderComponent} from './dashboard/layout/header/app-header.component';
import {AppBreadcrumbsComponent} from './dashboard/layout/breadcrumb/breadcrumb.component';
import {AppMenuComponent} from './dashboard/layout/menu/app-menu.component';
import {AppFooterComponent} from './dashboard/layout/footer/app-footer.component';
import {NAV_DROPDOWN_DIRECTIVES} from './dashboard/layout/directives/nav-dropdown/nav-dropdown.directive';
import {SIDEBAR_TOGGLE_DIRECTIVES} from './dashboard/layout/directives/sidebar/sidebar.directive';
import {PipeKeyModule} from './common/pipes/keys.pipe';
import {NgPipesModule} from 'ngx-pipes';
import {HttpRestService} from './common/services/http-rest.service';

@NgModule({
    declarations: [
        AppComponent,
        DashboardLayoutComponent,
        AppHeaderComponent,
        AppBreadcrumbsComponent,
        AppMenuComponent,
        AppFooterComponent,
        FrontLayoutComponent,
        NAV_DROPDOWN_DIRECTIVES,
        SIDEBAR_TOGGLE_DIRECTIVES
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        BsDropdownModule.forRoot(),
        TabsModule.forRoot(),
        ModalModule.forRoot(),
        PopoverModule.forRoot(),
        CKEditorModule,
        ToasterModule,
        BrowserAnimationsModule,
        PipeKeyModule,
        NgPipesModule
    ],
    providers: [
        TokenService,
        UserService,
        HttpRestService,
        CanActivateAuthGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
