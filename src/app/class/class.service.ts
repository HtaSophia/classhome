import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ClassApi } from '../api/class.api';
import { Class } from './types/class';
import { ClassRequest } from './types/class-request';

@Injectable({
    providedIn: 'root',
})
export class ClassService {
    private newClassSubject: Subject<Class>;

    private newClass$: Observable<Class>;

    public get newClassEvent$(): Observable<Class> {
        return this.newClass$;
    }

    constructor(private readonly classApi: ClassApi) {
        this.newClassSubject = new Subject();
        this.newClass$ = this.newClassSubject.asObservable();
    }

    public create(dto: ClassRequest): Observable<Class> {
        return this.classApi.create(dto).pipe(tap((result) => this.newClassSubject.next(result)));
    }

    public addStudent(studentId: string): Observable<Class> {
        return this.classApi.addStudent(studentId);
    }

    public getAll(): Observable<Class[]> {
        return this.classApi.getAll();
    }

    public getById(id: string): Observable<Class> {
        return this.classApi.getById(id);
    }

    public remove(id: string): Observable<Class> {
        return this.classApi.remove(id);
    }

    public removeStudent(id: string, studentId: string): Observable<Class> {
        return this.removeStudent(id, studentId);
    }
}
