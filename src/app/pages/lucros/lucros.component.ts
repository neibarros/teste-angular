import { Component, OnInit } from '@angular/core';

import { LucroService } from './shared/lucro.service';
import { Lucro } from './shared/lucro.model';

@Component({
	selector: 'app-lucros',
	templateUrl: './lucros.component.html',
	styleUrls: ['./lucros.component.scss']
})
export class LucrosComponent implements OnInit {

	lucros: Lucro[] = [];

	constructor(
		private lucroService: LucroService
	) { }

	ngOnInit() {
		this.get();
	}

	get() {
		this.lucroService.getAll().subscribe(
			lucros => {
				this.lucros = lucros.sort((a, b) => {
					if (a.dateMoviment < b.dateMoviment) {
						return 1;
					}
					if (a.dateMoviment > b.dateMoviment) {
						return -1;
					}
					return 0;
				});
				console.log(this.lucros);
			},
			error => alert('Erro ao carregar a lista')
		);
	}
}
