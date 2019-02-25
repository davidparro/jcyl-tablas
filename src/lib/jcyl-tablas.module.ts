import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { JcylTablasComponent } from './jcyl-tablas.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [JcylTablasComponent],
    imports: [
        BrowserModule
    ],
    exports: [JcylTablasComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JcylTablasModule { }
