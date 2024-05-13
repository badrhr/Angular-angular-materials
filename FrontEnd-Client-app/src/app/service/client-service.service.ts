import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Client, ClientADD} from "../models/client.model";

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {

  constructor(private httpClient : HttpClient) { }

  public getClients():Observable<Array<Client>>{
   return this.httpClient.get<Array<Client>>(`${environment.backEndHost}/clients`);
  }

  public addClient(formData : any):Observable<Client>{
    return this.httpClient.post<ClientADD>(`${environment.backEndHost}/clients`, formData);
  }

}
