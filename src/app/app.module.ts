import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { LucrosComponent } from './pages/lucros/lucros.component';
import { AppRoutingModule } from './app-routing.module';
import { LucroService } from './pages/lucros/shared/lucro.service';


@NgModule({
	declarations: [
		AppComponent,
		LucrosComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		AppRoutingModule
	],
	providers: [LucroService],
	bootstrap: [AppComponent]
})
export class AppModule { }
