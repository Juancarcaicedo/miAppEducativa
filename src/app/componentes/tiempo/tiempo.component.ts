import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TemperaturaService } from 'src/app/services/temperatura.service'; // IMPORTAMOS TEMPERATURA SERVICE 

@Component({
  selector: 'app-tiempo',
  templateUrl: './tiempo.component.html',
  styleUrls: ['./tiempo.component.css']
})
export class TiempoComponent implements OnInit {

  formulario!: FormGroup;

  tiempo: any; // recibe la respuesta completa y  la llenamos en cada campo
  name: any;
  temperatura: any;
  humedad : any;
  latitud: any;
  longitud: any;
  descripcion: any;
  //variables para manejo de errores
  showError: boolean=false;
  mensajeError: string="";
  fecha =  new Date();


  constructor(private fb: FormBuilder, private _tiempo: TemperaturaService )  //INYECTAMOS  EL SERVICIO
   { 
  this.iniciaFormulario();

  }

  ngOnInit(): void {
  }
  /**
   * Metodo que crea e inicia Un formulario
   */
  iniciaFormulario(){
    /**
     * declaramos nuestro objeto JSON
     */
    this.formulario=this.fb.group(
      {
        ciudad:['', [Validators.required,Validators.pattern('^[a-zA-Z ]*$')] ], // AGREGAMOS LA CONDICION QUE EL CAMPO SEA OBLIGATORIO, patter expresiones regulares
        codigo:['', [Validators.required,Validators.pattern('^[a-zA-Z ]*$')]]
      }
    )

  }
  consultar(){
    console.log("Formulario: ", this.formulario);

    this._tiempo.getEstadoTiempo( this.formulario.get('ciudad')?.value, this.formulario.get('codigo')?.value) // pasamos los parametros del formulario al metodo 
    .subscribe( respuesta => { //guaramos la informacion en la variable respuesta patron de de diseño subscribe 

      this.tiempo=respuesta;
      this.name= this.tiempo.name;
      this.temperatura= this.tiempo.main.temp;

      this.humedad = this.tiempo.main.humidity;
      this.latitud = this.tiempo.coord.lat;
      this.longitud= this.tiempo.coord.lon;

      this.descripcion= this.tiempo.weather[0].description;

      console.log("respuesta", respuesta);

    },

    // parte de manejo de errores 
    error =>{
      this.showError=true;
      this.mensajeError= "error consulatar el tiempo intenlo nuevamente ";

    }
    
    )

  }

}
