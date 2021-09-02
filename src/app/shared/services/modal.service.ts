import { Component, Injectable } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { from, Observable } from 'rxjs';
import { ModalData, ModalInstance } from '../types/modal-data';

@Injectable({
    providedIn: 'root',
})
export class ModalService {
    constructor(private ngbModalService: NgbModal) {}

    public showModal(component: Component, config: NgbModalOptions, data?: ModalData): Observable<unknown> {
        const modalRef = this.ngbModalService.open(component, config);

        if (data) {
            const componentInstance = modalRef.componentInstance as ModalInstance;
            componentInstance.modalData = data;
        }

        return from(modalRef.result);
    }
}
