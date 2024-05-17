import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient: HttpClient) { }

  getRegisters = (): any => {
    return this.httpClient.get<any>(`http://localhost:3000/api/register`, 
    { observe: 'response' }).pipe(
      map((response: HttpResponse<any>) => {
        return response.body;
      }),
      catchError((error: HttpErrorResponse) =>  { throw new Error(error.message); }),
    ).subscribe();
  };

  postRegisters = (): any => {
    return this.httpClient.post<any>(`http://localhost:3000/api/register`, 
    { observe: 'response' }).pipe(
      map((response: HttpResponse<any>) => {
        return response.body;
      }),
      catchError((error: HttpErrorResponse) =>  { throw new Error(error.message); }),
    ).subscribe();
  };
}
