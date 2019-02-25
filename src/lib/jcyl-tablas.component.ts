import { Component, OnInit, Input } from '@angular/core';
import { Tabla } from './jcyl-tablas-models';

@Component({
    selector: 'jcyl-jcyl-tablas',
    templateUrl: './jcyl-tablas.component.html',
    styleUrls: ['./jcyl-tablas.component.scss']
})
export class JcylTablasComponent implements OnInit {

    @Input() config: Tabla;

    constructor() { }

    ngOnInit() {
    }

}
