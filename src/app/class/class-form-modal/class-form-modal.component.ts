import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ClassRequest } from '../types/class-request';

@Component({
    selector: 'app-class-form-modal',
    templateUrl: './class-form-modal.component.html',
    styleUrls: ['./class-form-modal.component.scss'],
})
export class ClassFormModalComponent implements OnInit {
    public classForm: FormGroup;

    constructor(private readonly formBuilder: FormBuilder, private readonly activeModal: NgbActiveModal) {}

    public ngOnInit(): void {
        this.createForm();
    }

    public onSubmit(): void {
        this.closeModal(this.classForm.value);
    }

    public closeModal(data?: ClassRequest): void {
        this.activeModal.close(data);
    }

    private createForm(): void {
        this.classForm = this.formBuilder.group({
            name: ['', Validators.required],
            description: [''],
        });
    }
}
