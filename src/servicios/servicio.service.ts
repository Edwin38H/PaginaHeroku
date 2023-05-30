import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  jsonHeader = {
    headers: new HttpHeaders().set('Content-Type', 'application/json'),
  };
  constructor(private http: HttpClient) { }

  public get(url:string){
    return this.http.get(url);
  }
  update(data: any) {
    return this.http.patch(`http://localhost:8080/producto/update`, data, this.jsonHeader);
  }
}
