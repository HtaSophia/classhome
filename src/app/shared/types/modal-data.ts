import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

export type ModalData = {
    [key: string]: unknown;
    isModalMode?: boolean;
};

export interface ModalInstance {
    activeModal: NgbActiveModal;
    modalData: ModalData;
}
