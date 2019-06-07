import { Subject } from 'rxjs';

export class Tabla {
    cabecera: Cabecera[];
    caption?: string = null;
    summary?: string = null;
    isTypeA?: boolean = null;
    isTypeB?: boolean = null;
    isTypeC?: boolean = null;
    rows?: Row[] = null;
    paginado?: Paginado = null;
    id?: number = null;
    loadingTabla?: Subject<boolean> = new Subject<boolean>();

    constructor(props: Tabla) {
        Object.assign(this, props);
    }
}

export class Row {
    fields: Field[];
    destacada?: boolean = null;
    idTemp?: number = null;
    id?: number = null;
    selected ? = false;
    object?: any = null;

    constructor(props: Row) {
        Object.assign(this, props);
    }
}

export class Field {
    colspan?: number = null;
    rowspan?: number = null;
    content?: string = null;
    classTD ? = '';
    isButton?: boolean = null;
    class?: string = null;
    isImg?: boolean = null;
    src ? = '';
    alt ? = '';
    imgLink ? = '';
    isSeleccionable ? = false;
    selected ? = false;

    constructor(props: Field) {
        Object.assign(this, props);
    }
}

export class Paginado {
    limit: number = null;
    page: number = null;
    start?: number = null;
    end?: number = null;
    count: number = null;
    constructor(props: Paginado) {
        Object.assign(this, props);
    }
}

export class Cabecera {
    content: string;
    canSort ? = false;
    sort?: string = null;
    type?: string = null;
    canFilter ? = false;
    filter?: string = null;
    constructor(props: Cabecera) {
        Object.assign(this, props);
    }
}

export class Filtro {
    static c ? = 0;
    id?: number ;
    content: string;
    value: any;
    constructor(props: Filtro) {
        Filtro.c++;
        Object.assign(this, props);
        this.id = Filtro.c;
    }
}
