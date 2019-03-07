import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tabla, Field, Row } from './jcyl-tablas-models';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'jcyl-jcyl-tablas',
    templateUrl: './jcyl-tablas.component.html',
    styleUrls: ['./jcyl-tablas.component.scss']
})
export class JcylTablasComponent implements OnInit {

    @Input() config: Tabla;
    @Output() clicBoton: EventEmitter<any> = new EventEmitter();
    limits: number[] = [
        1, 5, 10, 25, 50
    ]
    formularioLimite: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router
    ) {
        this.crearFormularioLimite();
    }

    ngOnInit() {
        if (this.config.paginado) {
            this.formularioLimite.get('limite').setValue(
                this.config.paginado.limit
            );
        }
    }

    crearFormularioLimite() {
        this.formularioLimite = this.formBuilder.group({
            limite: 0
        });
        this.setFormularioLimiteListeners();
    }

    setFormularioLimiteListeners() {
        this.formularioLimite.get('limite').valueChanges.subscribe(
            data => {
                if (data) {
                    if (data > this.config.paginado.count || data === 'all') {
                        this.config.paginado.limit = this.config.paginado.count;
                    } else {
                        this.config.paginado.limit = parseInt(data, 10);
                    }
                }
            }
        );
    }

    getRowsPaginated(): Row[] {
        if (this.config.paginado) {
            return this.config.rows.slice(
                (this.config.paginado.page - 1) * this.config.paginado.limit,
                ((this.config.paginado.page - 1) * this.config.paginado.limit) + this.config.paginado.limit
            );
        }
        return this.config.rows;
    }

    getPages(): number[] {
        const resto = this.config.paginado.count % this.config.paginado.limit;
        let entero = Math.floor(this.config.paginado.count / this.config.paginado.limit);
        const resultado: number[] = [];
        if (resto > 0) {
            entero = entero + 1;
        }
        for (let i = 1; i <= entero; i++) {
            resultado.push(i);
        }
        return resultado;
    }

    goToPage(page: number) {
        this.config.paginado.page = page;
    }

    clicedBoton(nombreBoton: string, obj: Row) {
        const resultado = {
            fila: obj,
            boton: nombreBoton
        }
        this.clicBoton.emit(resultado);
    }

    imgGoTo(field: Field) {
        this.router.navigate([
            field.imgLink
        ]);
    }
}
