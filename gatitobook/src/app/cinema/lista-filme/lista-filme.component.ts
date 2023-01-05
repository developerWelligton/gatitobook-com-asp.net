import { Component, OnInit } from '@angular/core';
import { Filme } from '../novo-filme/Filme';
import { ListaFilmeService } from './lista-filme.service';

@Component({
  selector: 'app-lista-filme',
  templateUrl: './lista-filme.component.html',
  styleUrls: ['./lista-filme.component.css']
})
export class ListaFilmeComponent implements OnInit {
  filmes!: Filme[];
  constructor(private listafilmeService: ListaFilmeService) { }

  ngOnInit(): void {
    this.listafilmeService.retornaFilmes().subscribe((dados) => {
      console.log(dados)
    }
    )
  }

}
