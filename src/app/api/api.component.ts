import { Component } from '@angular/core';
import { DataService } from '../serives/data.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent {
  pokemons: any;
  stat: any = []; 

  constructor(private dataService: DataService) { }

  getPokemonStats() {
    this.dataService.getPokemon().subscribe((data: any) => {
      this.pokemons = data.results; 
      //console.log(this.pokemons.length);

      for (let i = 0; i <= this.pokemons.length; i++) {
        const stats = data.results[i].url;
        //console.log(stats);

        this.dataService.getPokemonStats(stats).subscribe((data_stat: any) => {
          this.stat.push({ stat: data_stat});
          //console.log(this.stat);
        });
      }
    }); 
  }

  hidePokemon(){
    this.stat = [];
  }
}
