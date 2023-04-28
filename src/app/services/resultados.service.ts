import { Injectable } from '@angular/core';
import {catchError} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Chistes } from '../entities/chistes';

@Injectable({
  providedIn: 'root'
})
export class ResultadosService {
  //Url del servicio
  url = 'https://v2.jokeapi.dev/joke/Programming?lang=es&amount=100';
  constructor(private _httpClient: HttpClient) {
    this.getData()
    console.log("servicio inicializado")
  }

  getData() {
   return this._httpClient.get<Observable<any>>(this.url).pipe(catchError(this.handleError('get', [])));
  }

  private handleError (operation = 'operation', result?:any) {
    return (error: any): any[] => {
    // TODO: send the error to remote logging infrastructure
     console.error(error); // log to console instead
    // TODO: better job of transforming error for user consumption
    console.log(`${operation} failed: ${error.message}`);
    // Let the app keep running by returning an empty result.
   return [];
     };
     }


}
