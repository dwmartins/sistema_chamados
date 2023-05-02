import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAmoutCalled, ICalled, INewCalled } from './IChamados';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardApiService {

  API = environment.API;

  allCalledUrl = `${this.API}/todos-chamados`;
  amountCalledUrl = `${this.API}/quantidade-chamados`;
  calledByIdUrl = `${this.API}/visualizar-chamado/`;
  newCalledUrl = `${this.API}/novo-chamado/`;

  constructor(private httpClient: HttpClient) { }

  getAllCalledAPI() {
    return this.httpClient.get<ICalled[]>(this.allCalledUrl);
  }

  getAmountCalledAPI() {
    return this.httpClient.get<IAmoutCalled[]>(this.amountCalledUrl);
  }

  getCalledByidAPI(id: number){
    return this.httpClient.get<ICalled[]>(`${this.calledByIdUrl}${id}`)
  }

  newCalledAPI(title: string, author: string, description: string) {
    const called = {
      titulo: title,
      autor: author,
      descricao: description
    }

    return this.httpClient.post<INewCalled[]>(this.newCalledUrl, called)
  }
}