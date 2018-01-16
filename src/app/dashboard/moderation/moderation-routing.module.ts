import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ModerationComponent} from './moderation.component';

const routes: Routes = [
    {
        path: '',
        component: ModerationComponent,
        data: {
            title: 'Moderation'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ModerationRoutingModule {
}
