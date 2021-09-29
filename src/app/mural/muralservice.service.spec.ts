import { TestBed } from '@angular/core/testing';

import { MuralserviceService } from './muralservice.service';

describe('MuralserviceService', () => {
    let service: MuralserviceService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(MuralserviceService);
    });

    it('should be created', () => {
        void expect(service).toBeTruthy();
    });
});
