import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { IUrlType } from './url-type';

@Injectable()
export class DataService {
    constructor(private http: HttpClient) {
    }

    getData<T, U>(urlType: IUrlType, params: U = null): Observable<T> {
        return this.http.get<T>(urlType.mockData)
            .pipe(
                tap((data) => of(data as T)),
                catchError(this.handleError<T>(urlType.url))
            );
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error); // log to console instead

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}
