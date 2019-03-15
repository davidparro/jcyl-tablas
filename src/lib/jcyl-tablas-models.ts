export class Tabla {
    cabecera: string[];
    caption: string;
    summary: string;
    isTypeA: boolean;
    isTypeB: boolean;
    isTypeC: boolean;
    rows: Row[];
    paginado: Paginado;

    constructor(props) {
        Object.assign(this, props);
    }
}

export class Row {
    fields: Field[];
    destacada: boolean;
    idTemp: number;

    constructor(props) {
        Object.assign(this, props);
    }
}

export class Field {
    colspan: number;
    rowspan: number;
    content: string;
    classTD = '';
    isButton: boolean;
    class: string;
    isImg: boolean;
    src = '';
    alt = '';
    imgLink = '';
    isSeleccionable = false;
    selected = false;

    constructor(props) {
        Object.assign(this, props);
    }
}

export class Paginado {
    limit: number;
    page: number;
    start: number;
    end: number;
    count: number;
    constructor(props) {
        Object.assign(this, props);
    }
}