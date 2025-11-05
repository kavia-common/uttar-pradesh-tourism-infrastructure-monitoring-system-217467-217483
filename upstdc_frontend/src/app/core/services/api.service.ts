import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ApiService {
  private base = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  // PUBLIC_INTERFACE
  get<T>(url: string, params?: Record<string, any>): Observable<T> {
    const hp = new HttpParams({ fromObject: params || {} });
    return this.http.get<T>(`${this.base}${url}`, { params: hp }).pipe(catchError(this.handleError));
  }

  // PUBLIC_INTERFACE
  post<T>(url: string, body: any): Observable<T> {
    return this.http.post<T>(`${this.base}${url}`, body).pipe(catchError(this.handleError));
  }

  // PUBLIC_INTERFACE
  put<T>(url: string, body: any): Observable<T> {
    return this.http.put<T>(`${this.base}${url}`, body).pipe(catchError(this.handleError));
  }

  // PUBLIC_INTERFACE
  delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(`${this.base}${url}`).pipe(catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {
    const message = err.error?.message || err.statusText || 'Request failed';
    return throwError(() => new Error(message));
  }
}
