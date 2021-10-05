import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { SubSink } from 'subsink';
import { Router } from '@angular/router';
import { ModalService } from '../../shared/services/modal.service';
import { getUndefinedValue } from '../../shared/utils/types-helper';
import { Account } from '../../account/account';
import { AuthService } from '../../auth/auth.service';
import { ClassService } from '../class.service';
import { Class } from '../types/class';
import { ClassRequest } from '../types/class-request';
import { ClassFormModalComponent } from './class-form-modal/class-form-modal.component';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
    public classes: Class[] = [];

    public user: Account;

    private subscriptions = new SubSink();

    constructor(
        private readonly router: Router,
        private readonly authService: AuthService,
        private readonly classService: ClassService,
        private readonly modalService: ModalService,
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

    public onCreateClassClick(): void {
        this.subscriptions.sink = this.modalService
            .showModal(ClassFormModalComponent as Component, { size: 'md' })
            .pipe(
                switchMap((classDto: ClassRequest) => {
                    if (classDto) {
                        return this.classService.create({ ...classDto, professor: this.user._id });
                    }

                    return of(getUndefinedValue());
                }),
            )
            .subscribe(
                (_result) => {},
                (error) => {
                    this.toaster.error(error);
                },
            );
    }

    public onClassCardClick(classId: string): void {
        void this.router.navigate(['classes', classId, 'mural']);
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
