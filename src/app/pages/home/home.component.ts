import { Component } from '@angular/core';
import { PokedexApiService } from 'src/app/services/pokedex-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  pokedex: any
  pokemons: any = {
    '0': []
  }
  
  constructor(private pokedexApiService: PokedexApiService) {
    this.pokedexApiService.getPokedex().subscribe({
      next: (res) => {
        this.pokedex = res.results;
        console.log(this.pokedex)
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete') 
    })
  }

  openPokedex(link: string, index: number) {
    if (this.pokemons[index] && this.pokemons[index].length > 0) {
      this.pokemons[index] = null;
    } else {
      this.pokedexApiService.getLink(link).subscribe({
        next: (res) => {
          this.pokemons[index] = res.pokemon_entries;
          console.log(this.pokemons)
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete') 
      })
    }
  }

}
