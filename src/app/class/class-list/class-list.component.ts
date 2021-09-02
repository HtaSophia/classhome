import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Class } from '../types/class';

@Component({
    selector: 'app-class-list',
    templateUrl: './class-list.component.html',
    styleUrls: ['./class-list.component.scss'],
})
export class ClassListComponent implements OnInit {
    @Input()
    public classes: Class[];

    @Input()
    public role: string;

    @Output()
    public removeClass = new EventEmitter<string>();

    public ngOnInit(): void {}

    public onRemoveClassClick(classId: string): void {
        this.removeClass.emit(classId);
    }
}
