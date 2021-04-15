import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list.component';
import { StarComponent } from './star/star.component';

@NgModule({
  declarations: [ // local de declaração dos componentes que o módulo-raiz irá enxergar (direta ou indiretamente) para renderizar a aplicação
    AppComponent,
    CourseListComponent,
    StarComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
