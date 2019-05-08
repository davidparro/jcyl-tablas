(Actualización del paquete [tablas](https://www.npmjs.com/package/tablas) )

Esta librería está basada en la [guía de estilos de la Junta de Castilla y León](https://www.jcyl.es/junta/guia/guia-estilos.html) para implementar los estilos mediante un componente Angular.

Con este componente podemos generar tablas de los tipos A,B y C.

Demo online: [StackBlitz](https://stackblitz.com/edit/angular-p96rqn)

# Instalación

Debemos descargar desde el [Repositorio de la junta de Castilla y León](https://github.com/juntadecastillayleon) las carpetas de la guía de estilos, para poder importar los css, js, fuentes, etc.

Copiar todo dentro de assets, dejando la estructura así:
```
assets
    css
    js
    fonts
    img
```

## NPM
```shell
npm install jcyl-tablas
```

## Importación de dependencias

```js

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JcylTablasModule } from 'jcyl-tablas';

@NgModule({
  declarations: [AppComponent],
  imports: [
        BrowserModule,
        AppRoutingModule,
        JcylTablasModule
        ],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

## Clases

<details><summary>Field</summary>
<p>

|Atributo|Tipo|Descripción|
|---|---|---|
|colspan|number|Colspan de la celda|
|rowspan|number|Rowspan de la celda|
|content|string|Contenido que se visualizará en la celda|
|classTD|string|Clase que se añade al TD|
|isButton|boolean|Indica si queremos que sea un botón|
|class|string|Clase que se añade al contenido|
|isImg|boolean|Indica si queremos que el contenido sea una imagen|
|src|string|Referencia en caso de que sea una imagen|
|alt|string|Contenido en caso de que la imagen no esté dispnible|
|imgLink|string|Enlace de la imagen en caso de que sea clicable|
|isSeleccionable|boolean|Indica que queremos que la celda sea un checkbox|
|selected|boolean|Atributo para los checkbox si queremos que estén seleccionados|


#### Ejemplos
```js
new Field({
    isSeleccionable: true
})

new Field({
    content: 'CONSEJERO DE EDUCACIÓN'
})

new Field({
    content: 'No',
    isButton: true,
    class: 'btn-sm'
})
```

</p>
</details>

<details><summary>Row</summary>
<p>

|Atributo|Tipo|Descripción|
|---|---|---|
|fields|Field[]|Array de objetos Field para pintar el contenido de la fila|
|destacada|boolean|Añade una clase para destacar la línea|
|id|number|Id para identificar la línea cuando es seleccionable (Field)|
|selected|boolean|Indica si está seleccionada|
|object|any|Por si queremos asociar un objeto para que nos le devuelva al tener filas seleccionables|


#### Ejemplos
```js
new Row({
    destacada: false,
    fields: [
        new Field({
            isSeleccionable: true
        }),
        new Field({
            content: 'No'
        }),
        new Field({
            content: 'No',
            isButton: true,
            class: 'btn-sm'
        })
    ]
})
```

</p>
</details>

<details><summary>Tabla</summary>
<p>

|Atributo|Tipo|Descripción|
|---|---|---|
|cabecera|string[]|Array de string que se mostrarán como cabecera|
|caption|string|Caption para la tabla|
|summary|string|Párrafo para mostrar origen de la tabla|
|isTypeA|boolean|Indica si es una tabla de tipo A ([Ver TIPO A](https://www.jcyl.es/junta/guia/guia-estilos-tablas.html))|
|isTypeB|boolean|Indica si es una tabla de tipo B ([Ver TIPO B](https://www.jcyl.es/junta/guia/guia-estilos-tablas.html))|
|isTypeC|boolean|Indica si es una tabla de tipo C ([Ver TIPO C](https://www.jcyl.es/junta/guia/guia-estilos-tablas.html))|
|rows|Row[]|Array de objetos Row que componen el contenido de la tabla|
|paginado|Paginado|Añade el paginado a la tabla|
|id|number|Id que tendrá la tabla|


#### Ejemplos
```js
new Tabla({
    cabecera: [
        '(EN MILLONES DE EUROS)',
        'LARGO PLAZO',
        'CORTO PLAZO',
        'TOTAL',
    ],
    caption: 'Distribución de la deuda según PDE (SEC 2010). Datos a 30 de septiembre de 2016',
    summary: 'Esto es el summary',
    isTypeA: true,
    rows: [
        new Row({
            destacada: false,
            fields: [
                new Field({
                    content: 'DEUDA FINANCIERA',
                    rowspan: 6
                }),
                new Field({
                    content: 'Administración general (Admón. Gral. + Fondo Facilidad Financiera)'
                }),
                new Field({
                    content: '9.775,98'
                }),
                new Field({
                    content: '0'
                }),
                new Field({
                    content: '9.775,98'
                })
            ]
        }),
        new Row({
            destacada: false,
            fields: [
                new Field({
                    content: 'Universidades, organismos autónomos administrativos y similares'
                }),
                new Field({
                    content: '394,78'
                }),
                new Field({
                    content: '2,56'
                }),
                new Field({
                    content: '397,34'
                })
            ]
        }),
        new Row({
            destacada: false,
            fields: [
                new Field({
                    content: 'Empresas clasificadas como administración pública'
                }),
                new Field({
                    content: '99,66'
                }),
                new Field({
                    content: '0'
                }),
                new Field({
                    content: '99,66'
                })
            ]
        }),
        new Row({
            destacada: true,
            fields: [
                new Field({
                    content: 'TOTAL'
                }),
                new Field({
                    content: '10.270,42'
                }),
                new Field({
                    content: '2,56'
                }),
                new Field({
                    content: '10.272,98'
                })
            ]
        }),
        new Row({
            destacada: false,
            fields: [
                new Field({
                    content: 'Factoring sin recurso'
                }),
                new Field({
                    content: '329,04'
                }),
                new Field({
                    content: '9,19'
                }),
                new Field({
                    content: '338,23'
                })
            ]
        }),
        new Row({
            destacada: false,
            fields: [
                new Field({
                    content: 'Otros (Colaboración público-privada) (*)'
                }),
                new Field({
                    content: '299,19'
                }),
                new Field({
                    content: '0'
                }),
                new Field({
                    content: '299,19'
                })
            ]
        }),
        new Row({
            destacada: false,
            fields: [
                new Field({
                    content: 'TOTAL DEUDA PROTOCOLO DÉFICIT EXCESIVO',
                    rowspan: 1
                }),
                new Field({
                    content: ''
                }),
                new Field({
                    content: '10.898,60'
                }),
                new Field({
                    content: '11,75'
                }),
                new Field({
                    content: '10.910,40'
                })
            ]
        })
    ]
});
```

</p>
</details>

## Envío y recibo de eventos

Para pasar el objeto Tabla al componente, debemos asignarlo así [config]="tabla".
Dependiendo de si tenemos campos seleccionables y la configuración de la tabla, podremos recibir dos eventos:
(sendSelected)="getSelected($event)" y (clicBoton)="botonClicked($event)"

```html
<jcyl-jcyl-tablas [config]="tabla" (sendSelected)="getSelected($event)"></jcyl-jcyl-tablas>
```
### Configuración de la tabla

|Atributo|Descripción|
|---|---|
|config|Objeto que tiene que recibir el objeto Tabla como parámetro|

### Eventos

|Evento|Descripción|
|---|---|
|sendSelected|Recibe todas las filas seleccionadas en caso de que sean seleccionables|
|capclicBotontion|Recibe el evento al clicar un botón en caso de que un campo Field sea botón|