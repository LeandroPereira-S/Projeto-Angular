import { Component } from '@angular/core';

@Component({
  selector: 'app-data-bindind',
  templateUrl: './data-bindind.component.html',
  styleUrls: ['./data-bindind.component.css']
})
export class DataBindindComponent {
 cursoAngular: boolean = true;
 valorAtual: string = "";
 valorSalvo: string = "";
 isMouseOver: boolean = false;

 getValor() {
  return 1;
 }
 getCurtirCurso() {
  return true;
 }

 botaoClicado(){
  alert("Botão clicado!")
 }

 onKeyUp(evento:KeyboardEvent){
  this.valorAtual = (evento.target as HTMLInputElement).value + ' | ';
}

salvarValor(valor: any){
  this.valorSalvo = valor;

}

onMouseOverOut(){
  this.isMouseOver = !this.isMouseOver;
}

}
