import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {marvel} from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class MarvelService {
  baseUrl = marvel.url;
  constructor(private http:HttpClient) { }

  getCharacters():Observable<any> {
    const url = `${this.baseUrl}ts=${marvel.ts}&apikey=${marvel.apikey}&hash=${marvel.hash}`;     
    return this.http.get<any>(url).pipe(map((data:any) => data));
  }

  

}
