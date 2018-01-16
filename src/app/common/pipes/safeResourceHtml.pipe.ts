import {NgModule, Pipe} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({name: 'safeResourceHtml'})
export class SafeResourceHtmlPipe {
    constructor(private sanitizer: DomSanitizer){}

    transform(html) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(html);
    }
}

@NgModule({
    imports: [],
    exports: [SafeResourceHtmlPipe],
    declarations: [SafeResourceHtmlPipe]
})
export class SafeResourceHtmlPipeModule {
}