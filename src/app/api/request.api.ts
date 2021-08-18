import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Params } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { AuthService } from '../auth/auth.service';

interface Headers {
    [header: string]: string | string[];
}

export class RequestApi {
    protected baseUrl = environment.apiUrl;

    constructor(protected readonly http: HttpClient, protected readonly authService: AuthService) {}

    protected post<T, K>(url: string, body: T, _query?: unknown): Observable<K> {
        return this.http
            .post<K>(`${this.baseUrl}/${url}`, body, { headers: this.jwt() })
            .pipe(catchError((error) => this.handleError(error)));
    }

    protected put<T, K>(url: string, body: T, _query?: unknown): Observable<K> {
        return this.http
            .put<K>(`${this.baseUrl}/${url}`, body, { headers: this.jwt() })
            .pipe(catchError((error) => this.handleError(error)));
    }

    protected get<T>(url: string, query?: Params): Observable<T[]> {
        return this.http
            .get<T[]>(`${this.baseUrl}/${url}`, {
                headers: this.jwt(),
                params: new HttpParams({ fromObject: { ...query } }),
            })
            .pipe(catchError((error) => this.handleError(error)));
    }

    protected getOne<T>(url: string, query?: Params): Observable<T> {
        return this.http
            .get<T>(`${this.baseUrl}/${url}`, {
                headers: this.jwt(),
                params: new HttpParams({ fromObject: { ...query } }),
            })
            .pipe(catchError((error) => this.handleError(error)));
    }

    protected delete<T>(url: string, query?: Params): Observable<T> {
        return this.http
            .delete<T>(`${this.baseUrl}/${url}`, {
                headers: this.jwt(),
                params: new HttpParams({ fromObject: { ...query } }),
            })
            .pipe(catchError((error) => this.handleError(error)));
    }

    protected jwt(): Headers {
        const { token } = this.authService;
        const headers: Headers = {};

        if (token) {
            headers.Authorization = `Bearer ${token}`;
        }

        return headers;
    }

    /* eslint-disable no-console */
    private handleError(error: HttpErrorResponse): Observable<never> {
        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
        } else {
            console.error(`Backend returned code ${error.status},`);
            console.log(error.error);
        }

        return throwError('Something bad happened; please try again later.');
    }
    /* eslint-enable no-console */
}
