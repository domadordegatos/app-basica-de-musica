import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  instrumentos = [
    {nombre: 'Flauta', imagen:'assets/imagenes/flauta.png', audio:'assets/sonidos/flauta.mp3'},
    {nombre: 'PLatillos', imagen:'assets/imagenes/platillos.png', audio:'assets/sonidos/platillos.mp3'},
    {nombre: 'Bombo1', imagen:'assets/imagenes/bombo1.png', audio:'assets/sonidos/bombo1.mp3'},
    {nombre: 'Bombo2', imagen:'assets/imagenes/bombo2.png', audio:'assets/sonidos/bombo2.mp3'},
  ]

  soundPlay(item:any){
    console.log(item);
    const sonido = new Audio();
    sonido.src = item.audio;
    sonido.load();
    sonido.play();
  }
}
