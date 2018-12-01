import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LucrosComponent } from './pages/lucros/lucros.component';


@NgModule({
	declarations: [
		AppComponent,
		LucrosComponent
	],
	imports: [
		BrowserModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
