import { HttpClient } from '@angular/common/http'; // importamos libreria http
import { Injectable } from '@angular/core';

const urlBase='https://api.openweathermap.org/data/2.5/weather';// creamos nuestra url base valores definidos sin importar datos 
const appId='629ae639a889de02f31f4753262098e9'; // valor del keys app id 


@Injectable({
  providedIn: 'root'
})
export class TemperaturaService {

  constructor(private http: HttpClient) //  
   { }
   getEstadoTiempo(ciudad: string , codigo: string )//creamos un metodo para obtener el tiempo parametros ciudad y codigo
   {
      const url=`${ urlBase }?q=${ ciudad }, ${ codigo},&appid=${appId}`;// de esta forma podemos  concatenar  url base  valores de entradaappid
    
      return this.http.get(url);
  }

}
