import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { map, catchError, Observable, Subject } from 'rxjs';

export interface Register {
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
  private _registerAll = new Subject<Register[]>;

  get getRegisterAll$() {
    if (!this._registerAll.observed) {
      this.getRegisters();
    };
    return this._registerAll.asObservable();
  }
  constructor(private httpClient: HttpClient) { }

  private getRegisters = (): void => {
    this.httpClient.get<Register[]>(`http://localhost:3000/api/register`,
      { observe: 'response'},
    ).pipe(
      map((response: HttpResponse<Register[]>) => {
        this._registerAll.next(response.body!);
      }),
      catchError((error: HttpErrorResponse) =>  { throw new Error(error.message); }),
    ).subscribe();
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
