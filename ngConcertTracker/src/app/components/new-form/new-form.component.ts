import { Concert } from './../../models/concert';
import { Component, OnInit } from '@angular/core';
import { ConcertService } from 'src/app/services/concert.service';

@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.css']
})
export class NewFormComponent implements OnInit {
  newConcert: Concert = new Concert();
  selected: Concert = null;

  constructor(private concertService: ConcertService) {}

  ngOnInit() {
  }
  addNewConcert() {
    this.concertService.create(this.newConcert).subscribe(
      data => {
        // this.reload();
      },
      err => console.error('Observer got an error: ' + err)
    );
    this.newConcert = new Concert();
  }
  displayTable() {
    this.selected = null;
  }

  displayConcert(concert: Concert) {
    this.selected = concert;
    console.log(concert);
  }

  setNewConcert() {
    this.newConcert = new Concert();
  }
  deleteConcert(id: number) {
    this.concertService.delete(id).subscribe(
      data => {
        // this.reload();
      },
      err => console.error('Observer got an error: ' + err)
    );
    // this.reload();
  }

}
