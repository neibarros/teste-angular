import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { _throw } from 'rxjs/observable/throw';
import { map, catchError } from 'rxjs/operators';

import { Lucro } from './lucro.model';
import { environment } from './../../../../environments/environment';

@Injectable()
export class LucroService {

	constructor(
		private http: HttpClient,
	) { }

	getAll(): Observable<Lucro[]> {
		return this.http.get(environment.apiUrl).pipe(
			catchError(this.handleError),
			map(this.jsonDataToEntries)
		);
	}

	// PRIVATE METHODS

	private jsonDataToEntries(jsonData: any[]): Lucro[] {
		let lucros: Lucro[] = [];
		let balance = 0;

		jsonData = jsonData.sort((a, b) => {
			if (a.dateMoviment > b.dateMoviment) { return 1; }
			if (a.dateMoviment < b.dateMoviment) { return -1; }
			return 0;
		});

		jsonData.forEach(element => {
			const lucro = Object.assign(new Lucro(), element);
			balance += parseFloat(lucro.proft);
			lucro.balance = balance.toFixed(6).toString();
			lucro.profitPercentage = lucro.profitPercentage / 100;
			lucros.push(lucro);
		});

		lucros = lucros.sort((a, b) => {
			if (a.dateMoviment < b.dateMoviment) { return 1; }
			if (a.dateMoviment > b.dateMoviment) { return -1; }
			return 0;
		});

		return lucros;
	}

	private handleError(error: any): Observable<any> {
		console.log('ERRO NA REQUISIÇÃO => ', error);
		return _throw(error);
	}

}
