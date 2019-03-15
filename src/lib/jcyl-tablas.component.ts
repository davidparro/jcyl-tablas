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
    @Output() sendSelected: EventEmitter<Row[]> = new EventEmitter();
    limits: number[] = [
        1, 5, 10, 25, 50
    ];
    formularioLimite: FormGroup;
    rowsSelected: Row[];

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
        this.rowsSelected = [];
        this.config.rows.forEach((row, i) => {
            row.idTemp = i + 1;
        });
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

    toggleSeleccion(campo: Field, fila: Row) {
        console.log('Fila: ', fila);
        console.log('Campo: ', campo);
        console.log('RowsSelected: ', this.rowsSelected);
        if (this.rowsSelected.find(r => r.idTemp === fila.idTemp)) {
            const posicion = this.rowsSelected.indexOf(fila);
            this.rowsSelected.splice(posicion, 1);
            campo.selected = false;
        } else {
            this.rowsSelected.push(fila);
            campo.selected = true;
        }

        console.log(this.rowsSelected);
    }

    sendSelectedRow() {
        this.rowsSelected.forEach(r => {
            delete r.idTemp;
        });
        setTimeout(() => {
            this.sendSelected.emit(this.rowsSelected);
        });
    }
}
