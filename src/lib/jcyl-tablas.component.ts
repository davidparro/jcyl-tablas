import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Tabla, Field, Row, Cabecera, Filtro } from './jcyl-tablas-models';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'jcyl-jcyl-tablas',
    templateUrl: './jcyl-tablas.component.html',
    styleUrls: ['./jcyl-tablas.component.scss']
})
export class JcylTablasComponent implements OnInit, OnChanges {

    @Input() config: Tabla;
    @Output() clicBoton: EventEmitter<any> = new EventEmitter();
    @Output() sendSelected: EventEmitter<Row[]> = new EventEmitter();
    @Output() changeLimit: EventEmitter<string> = new EventEmitter();
    @Output() changePage: EventEmitter<number> = new EventEmitter();
    @Output() sort: EventEmitter<boolean> = new EventEmitter();
    @Output() filters: EventEmitter<Filtro[]> = new EventEmitter();
    limits: number[] = [
        1, 5, 10, 25, 50
    ];
    formularioLimite: FormGroup;
    formularioFiltro: FormGroup;
    rowsSelected: Row[];
    showFilterOption = false;
    showFilters = false;
    filtrosAplicados: Filtro[] = [];
    campoSeleccionado: Cabecera = null;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router
    ) {
        this.crearFormularioLimite();
        this.crearFormularioFiltro();
    }

    ngOnInit() {
        if (this.config.paginado) {
            this.formularioLimite.get('limite').setValue(
                this.config.paginado.limit,
                { emitEvent: false }
            );
        }
        this.rowsSelected = [];
        setTimeout(() => {
            this.config.rows.forEach((row, i) => {
                row.idTemp = i + 1;
            });
            this.canFilter();
        });
    }

    canFilter() {
        this.config.cabecera.forEach(element => {
            if (element.canFilter === true) {
                this.showFilterOption = true;
                if (element.filter) {
                    this.filtrosAplicados.push(
                        new Filtro({
                            content: element.content,
                            value: element.filter
                        })
                    );
                }
            }
        });
    }

    ngOnChanges() {
        setTimeout(() => {
            this.config.rows.forEach((row, i) => {
                row.idTemp = i + 1;
            });
        });
    }

    crearFormularioFiltro() {
        this.formularioFiltro = this.formBuilder.group({
            filtro: [null, [Validators.required]],
            campo: [{ value: null, disabled: false }]
        });
        this.setFormularioFiltroListeners();
    }

    setFormularioFiltroListeners() {
        this.formularioFiltro.get('campo').valueChanges.subscribe((data: Cabecera) => {
            this.campoSeleccionado = data;
        });
    }

    crearFormularioLimite() {
        this.formularioLimite = this.formBuilder.group({
            limite: 10
        });
        this.setFormularioLimiteListeners();
    }

    setFormularioLimiteListeners() {
        this.formularioLimite.get('limite').valueChanges.subscribe(
            data => {
                if (data) {
                    if (data > this.config.paginado.count || data === 'all') {
                        this.config.paginado.limit = this.config.paginado.count;
                        this.changeLimit.emit(data);
                    } else {
                        this.config.paginado.limit = parseInt(data, 10);
                        this.changeLimit.emit(data);
                    }
                }
            }
        );
    }

    getRowsPaginated(): Row[] {
        return this.config.rows;
    }

    getPages(): number[] {
        const resultado: number[] = [];
        for (let i = 1; i <= this.config.paginado.count; i++) {
            resultado.push(i);
        }
        return resultado;
    }

    goToPage(page: number) {
        this.changePage.emit(page);
    }

    clickedBoton(nombreBoton: string, obj: Row) {
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
        if (this.rowsSelected.find(r => r.idTemp === fila.idTemp)) {
            const posicion = this.rowsSelected.indexOf(fila);
            this.rowsSelected.splice(posicion, 1);
            campo.selected = false;
        } else {
            this.rowsSelected.push(fila);
            campo.selected = true;
        }
    }

    sendSelectedRow() {
        this.rowsSelected.forEach(r => {
            delete r.idTemp;
        });
        setTimeout(() => {
            this.sendSelected.emit(this.rowsSelected);
        });
    }

    sortFields(campo) {
        this.config.cabecera.forEach(element => {
            if (campo === element) {
                switch (element.sort) {
                    case 'asc':
                        element.sort = 'desc';
                        break;
                    case 'desc':
                        element.sort = null;
                        break;
                    case null:
                        element.sort = 'asc';
                        break;
                }
            } else {
                if (element.canSort) {
                    element.sort = null;
                }
            }
        });
        this.sort.emit(campo);
    }

    getCamposFiltrables(): Cabecera[] {
        const cabecerasConFiltro: Cabecera[] = [];
        this.config.cabecera.forEach(campo => {
            if (campo.canFilter) {
                cabecerasConFiltro.push(campo);
            }
        });
        return cabecerasConFiltro;
    }

    addFiltro() {
        if (
            this.filtrosAplicados.find(f => f.content === this.formularioFiltro.get('campo').value.content) === undefined
        ) {
            this.filtrosAplicados.push(
                new Filtro({
                    content: this.formularioFiltro.get('campo').value.content,
                    value: this.formularioFiltro.get('filtro').value
                })
            );
        } else {
            const index = this.filtrosAplicados.indexOf(
                this.filtrosAplicados.find(f => f.content === this.formularioFiltro.get('campo').value.content)
            );
            this.filtrosAplicados[index].value = this.formularioFiltro.get('filtro').value;
        }
        this.emitFilters();
    }

    removeFiltro(filtro: Filtro) {
        const index = this.filtrosAplicados.indexOf(filtro);
        this.filtrosAplicados.splice(index, 1);
        this.emitFilters();
    }

    emitFilters() {
        this.filters.emit(this.filtrosAplicados);
    }
}
