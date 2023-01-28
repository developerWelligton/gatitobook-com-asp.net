import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { AlertService, AlertTypes } from 'src/app/shared/alert.service';
import { Cinemas } from '../lista-cinema/lista-cinema.interface';
import { ListaCinemaService } from '../lista-cinema/lista-cinema.service';
import { ListaFilmeService } from '../lista-filme/lista-filme.service';
import { ListaGerenteService } from '../lista-gerente/lista-gerente.service';
import { Cinema } from '../novo-cinema/Cinema';
import { Filme } from '../novo-filme/Filme';
import { Gerente } from '../novo-gerente/Gerente';
import { NovoSessaoService } from './novo-sessao.service';
import { Sessao } from './Sessao';

@Component({
  selector: 'app-novo-sessao',
  templateUrl: './novo-sessao.component.html',
  styleUrls: ['./novo-sessao.component.css']
})
export class NovoSessaoComponent implements OnInit {

  formularioSessao!: FormGroup;  
  filme$: Observable<Filme[]> | undefined
  cinema$: Observable<Cinemas[]> | undefined
  filmeId: number | undefined;
  cinemaId: number | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private listaFilmeService: ListaFilmeService , 
    private listaCinemaService:  ListaCinemaService,
    private novoSessaoService:  NovoSessaoService,
    private spinner: NgxSpinnerService,
    private alertService: AlertService) { }

  ngOnInit(): void { 
    this.filme$ = this.listaFilmeService.retornaFilmes();
    this.cinema$ = this.listaCinemaService.retornaCinemas();

    this.formularioSessao = this.formBuilder.group({ 
      CinemaId: [this.cinemaId, [Validators.required]] ,
      FilmeId: [this.filmeId, [Validators.required]]    
    }) 
  }

  cadastrar() {  
    console.error("")
    console.log(this.formularioSessao.getRawValue())
    this.spinner.show();
    if(this.formularioSessao.valid){  
      const novoSessao = this.formularioSessao.getRawValue() as Sessao; 
      
       
      this.novoSessaoService.cadastraNovoSessao(novoSessao).subscribe(
        () => {
          this.alertService.showAlert("Cinema cadastrado com sucesso!",AlertTypes.SUCCESS)
          this.spinner.hide(); 
          this.formularioSessao.reset()
        },
        (error:any) => {
          console.log(error);
          this.alertService.showAlert("Endereço não cadastrado!",AlertTypes.DANGER)
          this.spinner.hide()
        }
      ); 
    }
  }

  changeCinema(event:any) {
    console.log(event.target.value);
  }

  changeFilme(event:any) {
    console.log(event.target.value); 
  }


}
