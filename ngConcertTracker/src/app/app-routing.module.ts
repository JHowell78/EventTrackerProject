import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConcertListComponent } from './components/concert-list/concert-list.component';
// import { NewFormComponent } from './components/new-form/new-form.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'concerts', component: ConcertListComponent },
  { path: 'concerts/id', component: ConcertListComponent },
  { path: 'concerts/search/', component: ConcertListComponent },
  // { path: 'form', component: NewFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
