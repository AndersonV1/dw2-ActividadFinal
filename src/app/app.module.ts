import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here Importamos FormsModule

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component'; //Importamos HereosComponent
import { HeroDetailComponent } from './hero-detail/hero-detail.component';//
import { MessagesComponent } from './messages/messages.component';//
import { AppRoutingModule } from './app-routing.module';//
import { DashboardComponent } from './dashboard/dashboard.component'; //Importamos HereosComponent


//Aregamos modulos extenos en imports
//Declaramos en la matriz

@NgModule({
    declarations: [
        AppComponent,
        HeroesComponent,
        MessagesComponent,
        DashboardComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule,
        HeroDetailComponent,
        AppRoutingModule
    ]
})
export class AppModule { }