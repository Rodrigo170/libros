import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFireDatabaseModule} from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment';
import { config } from 'rxjs';
import { LibroService } from './services/libro.service';
import { LibrosComponent } from './page/libros/libros.component';

@NgModule({
  declarations: [
    AppComponent,
    LibrosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [
    LibroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
