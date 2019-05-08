(Actualización del paquete [tablas](https://www.npmjs.com/package/tablas) )

Esta librería está basada en la [guía de estilos de la Junta de Castilla y León](https://www.jcyl.es/junta/guia/guia-estilos.html) para implementar los estilos mediante un componente Angular.

Con este componente podemos generar tablas de los tipos A,B y C.

Demo online: [StackBlitz](https://stackblitz.com/edit/angular-p96rqn)

#Instalación

Debemos descargar desde el [Repositorio de la junta de Castilla y León](https://github.com/juntadecastillayleon) las carpetas de la guía de estilos, para poder importar los css, js, fuentes, etc.

Copiar todo dentro de assets, dejando la estructura así:
```
assets
    css
    js
    fonts
    img
```

##NPM
```shell
npm install jcyl-tablas
```

##Importación de dependencias

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

#### yes, even hidden code blocks!

```python
print("hello world!")
```

</p>
</details>

<details><summary>Row</summary>
<p>

#### yes, even hidden code blocks!

```python
print("hello world!")
```

</p>
</details>

<details><summary>Tabla</summary>
<p>

#### yes, even hidden code blocks!

```python
print("hello world!")
```

</p>
</details>