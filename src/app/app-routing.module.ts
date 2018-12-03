import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LucrosComponent } from './pages/lucros/lucros.component';

const routes: Routes = [
	{ path: '', component: LucrosComponent },
	{ path: 'lucros', component: LucrosComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
