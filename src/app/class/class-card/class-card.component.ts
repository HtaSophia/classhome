import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Class } from '../types/class';

@Component({
    selector: 'app-class-card',
    templateUrl: './class-card.component.html',
    styleUrls: ['./class-card.component.scss'],
})
export class ClassCardComponent implements OnInit {
    @Input()
    public class: Class;

    @Input()
    public isProfessor: boolean;

    @Output()
    public removeClass = new EventEmitter<string>();

    public cardColor: string;

    public ngOnInit(): void {
        this.cardColor = this.getRandomColor();
    }

    public onRemoveClassClick(): void {
        this.removeClass.emit(this.class._id);
    }

    private getRandomColor(): string {
        return `rgb(${Math.floor(Math.random() * 100)},${Math.floor(Math.random() * 100)},${Math.floor(
            Math.random() * 100,
        )})`;
    }
}
