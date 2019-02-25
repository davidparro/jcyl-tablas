export class Tabla {
    cabecera: string[];
    caption: string;
    summary: string;
    isTypeA: boolean;
    isTypeB: boolean;
    isTypeC: boolean;
    rows: Row[];

    constructor(props) {
        Object.assign(this, props);
    }
}

export class Row {
    fields: Field[];
    destacada: boolean;
    constructor(props) {
        Object.assign(this, props);
    }
}

export class Field {
    colspan: number;
    rowspan: number;
    content: string;

    constructor(props) {
        Object.assign(this, props);
    }
}