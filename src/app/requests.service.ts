import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  url: string = "https://contabilidadsinrebu.azurewebsites.net/"
  constructor(private http:HttpClient) { }

  async login(body:any,endpoint:string){

    return await this.http.post<any>(`${this.url}${endpoint}`,body)
  }
  getSessionInfo(){
    const datax : any = localStorage.getItem('response');
    const data = JSON.parse(datax);
    return data;
  }
}
