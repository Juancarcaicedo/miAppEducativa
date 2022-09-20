import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  ciudades = ['Santiago', 'Bogota', 'Buenos Aires', 'Popayan', 'Saopaulo', 'kategat'];
  showCiudad: boolean=true;
  changeCss:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }
  mostrar(){
    this.showCiudad=!this.showCiudad; // cambio el valor de la variable show
  }
  cambioCss(){
    this.changeCss=!this.changeCss;
  }

}
