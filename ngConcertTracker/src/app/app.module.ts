import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConcertListComponent } from './components/concert-list/concert-list.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ConcertService } from './services/concert.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { ShowPipe } from './pipes/show.pipe';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NewFormComponent } from './components/new-form/new-form.component';


// import { MDBBootstrapModule } from 'angular-bootstrap-md';


@NgModule({
  declarations: [
    AppComponent,
    ConcertListComponent,
    ShowPipe,
    NavigationComponent,
    NewFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    // MDBBootstrapModule
  ],
  providers: [ConcertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
