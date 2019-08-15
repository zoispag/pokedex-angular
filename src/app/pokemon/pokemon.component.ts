declare function require(path: string);
import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Type } from '../TypeInterface';

interface PokemonData {
  id: number;
  name: string;
  types: Type[];
}

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  encapsulation: ViewEncapsulation.None
})
export class PokemonComponent implements OnInit {
  @Input() pokeid: number;

  public pokemonData: PokemonData;
  public loaded = false;
  public placeholder = require('./pokeball.png');

  ngOnInit(): void {
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.pokeid}`)
      .then(response => response.json())
      .then(data => {
        this.pokemonData = data;
        this.loaded = true;
      })
      .catch(err => console.error(err));
  }

  get typesArray(): Type[] {
    return this.pokemonData.types.slice().sort((a: Type, b: Type) => (a.slot > b.slot) ? 1 : ((b.slot > a.slot) ? -1 : 0));
  }

  public getTypeClass(type: string): string {
    return `ml-1 type-${type}`;
  }
}
