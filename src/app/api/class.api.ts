import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Class } from '../class/types/class';
import { ClassRequest } from '../class/types/class-request';
import { RequestApi } from './request.api';

@Injectable({ providedIn: 'root' })
export class ClassApi extends RequestApi {
    private endpoint = 'class';

    constructor(protected http: HttpClient, protected authService: AuthService) {
        super(http, authService);
    }

    public create(dto: ClassRequest): Observable<Class> {
        return this.post<ClassRequest, Class>(`${this.endpoint}`, dto);
    }

    public addStudent(studentId: string): Observable<Class> {
        return this.post<{ student: string }, Class>(`${this.endpoint}`, { student: studentId });
    }

    public getAll(): Observable<Class[]> {
        return this.get<Class>(`${this.endpoint}`);
    }

    public getById(id: string): Observable<Class> {
        return this.getOne<Class>(`${this.endpoint}/${id}`);
    }

    public update(id: string, dto: Class): Observable<Class> {
        return this.put<Class, Class>(`${this.endpoint}/${id}`, dto);
    }

    public removeStudent(id: string, studentId: string): Observable<Class> {
        return this.delete<Class>(`${this.endpoint}/${id}`, { student: studentId });
    }

    public remove(id: string): Observable<Class> {
        return this.delete<Class>(`${this.endpoint}/${id}`);
    }
}
