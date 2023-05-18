import { Router, RouterModule } from '@angular/router';
import { PensamentoService } from './../../penamentos/pensamento.service';
import { Pensamento } from './../pensamento';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit { 

  pensamento: Pensamento = {
   
    conteudo: '',
    autoria: '',
    modelo: 'modelo1',
}
constructor(
  private service: PensamentoService,
  private Router: Router
  ) {}

ngOnInit(): void {
  
}

criarPensamento() {
  this.service.criar(this.pensamento).subscribe(() => {
    this.Router.navigate(['/listarPensamento'])
})
}
  cancelar() {
    this.Router.navigate(['/listarPensamento'])  

  }

} 