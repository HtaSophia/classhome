import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Class } from '../../types/class';

@Component({
    selector: 'app-class-list',
    templateUrl: './class-list.component.html',
    styleUrls: ['./class-list.component.scss'],
})
export class ClassListComponent {
    @Input()
    public classes: Class[];

    @Input()
    public role: string;

    @Output()
    public removeClass = new EventEmitter<string>();

    @Output()
    public classCardClickEvent = new EventEmitter<string>();

    public onCardClick(classId: string): void {
        this.classCardClickEvent.emit(classId);
    }

    public onRemoveClassClick(classId: string): void {
        this.removeClass.emit(classId);
    }
}
