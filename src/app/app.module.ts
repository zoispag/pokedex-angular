import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LazyLoadImageModule } from 'ng-lazyload-image';

import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { TypeComponent } from './type/type.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    TypeComponent
  ],
  imports: [
    BrowserModule,
    LazyLoadImageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
