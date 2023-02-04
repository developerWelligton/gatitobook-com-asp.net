import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/autenticacao/usuario/usuario.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  mostraMenu= false; 

  constructor() { }

  ngOnInit(): void {
  }

  abreMenu(){
    this.mostraMenu = !this.mostraMenu;
  }

  fechaMenu() {
    this.mostraMenu = false;
  }
}

