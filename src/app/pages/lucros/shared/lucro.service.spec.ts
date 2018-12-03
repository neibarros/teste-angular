import { TestBed, inject } from '@angular/core/testing';

import { LucroService } from './lucro.service';

describe('SharedService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [LucroService]
		});
	});

	it('should be created', inject([LucroService], (service: LucroService) => {
		expect(service).toBeTruthy();
	}));
});
