import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { map, catchError, Observable } from 'rxjs';

interface Register {
  id?: string;
  firstname?: string;
  surname?: string;
  created_date_tz?: Date;
  created_date?: Date;
  luxon_date_tz?: Date;
  luxon_date?: Date;
  javascript_date_tz?: Date;
  javascript_date?: Date;
  component?: string;
  timezone?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient: HttpClient) { }

  getRegisters = (): any => {
    return this.httpClient.get<any>(`http://localhost:3000/api/register`).pipe(
      map((response: HttpResponse<any>) => {
        return response.body;
      }),
      catchError((error: HttpErrorResponse) =>  { throw new Error(error.message); }),
    );
  };

  postRegisters = (register: Register): Observable<number> => {
    console.log('postRegister', register);
    return this.httpClient.post<Register>(`http://localhost:3000/api/register`, register,
    { observe: 'response', responseType: 'json' }).pipe(
      map((response: HttpResponse<Register>) => {
        return response.status;
      }),
      catchError((error: HttpErrorResponse) =>  { throw new Error(error.message); }),
    );
  };
}
