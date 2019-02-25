(Actualización del paquete [tablas](https://www.npmjs.com/package/tablas) )

Esta librería está basada en la [guía de estilos de la Junta de Castilla y León](https://www.jcyl.es/junta/guia/guia-estilos.html) para implementar los estilos mediante un componente Angular.

Con este componente podemos generar tablas de los tipos A,B y C.

Demo online: [StackBlitz](https://stackblitz.com/edit/angular-p96rqn)

#Instalación

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