import { Component, OnDestroy, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { SubSink } from 'subsink';
import { ToastrService } from 'ngx-toastr';
import { Account } from '../account/account';
import { AuthService } from '../auth/auth.service';
import { ClassService } from './class.service';
import { Class } from './types/class';

@Component({
    selector: 'app-class',
    templateUrl: './class.component.html',
    styleUrls: ['./class.component.scss'],
})
export class ClassComponent implements OnInit, OnDestroy {
    public classes: Class[] = [];

    public user: Account;

    private subscriptions = new SubSink();

    constructor(
        private readonly authService: AuthService,
        private readonly classService: ClassService,
        private readonly toaster: ToastrService,
    ) {}

    public ngOnInit(): void {
        this.user = this.authService.user;

        this.subscriptions.sink = this.classService.getAll().subscribe(
            (classes) => {
                this.classes = classes;
            },
            (error) => {
                this.toaster.error(error);
            },
        );

        this.onNewClass();
    }

    public ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }

    public onRemoveClassClick(classId: string): void {
        this.subscriptions.sink = of(classId)
            .pipe(
                switchMap((id) => {
                    if (this.user.role === 'professor') {
                        return this.classService.remove(id);
                    }

                    return this.classService.removeStudent(id, this.user._id);
                }),
            )
            .subscribe(
                (_result) => {
                    const classIndex = this.classes.findIndex((cls) => cls._id === classId);
                    this.classes.splice(classIndex, 1);
                },
                (error) => {
                    this.toaster.error(error);
                },
            );
    }

    private onNewClass(): void {
        this.classService.newClassEvent$.subscribe((newClass) => {
            this.classes.push(newClass);
        });
    }
}
