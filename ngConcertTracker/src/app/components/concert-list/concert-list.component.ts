import { Concert } from './../../models/concert';
import { Component, OnInit } from '@angular/core';
import { ConcertService } from 'src/app/services/concert.service';

@Component({
  selector: 'app-concert-list',
  templateUrl: './concert-list.component.html',
  styleUrls: ['./concert-list.component.css'],
  // providers: [SearchService]

})
export class ConcertListComponent implements OnInit {
  editConcert: Concert = null;
  newConcert: Concert = new Concert();
  selected: Concert = null;
  title = 'Concert Count';
  concerts: Concert[] = [];
  keySearch: string[];
  results: Concert;
  result: Concert;
  constructor(private concertService: ConcertService) {}

  ngOnInit() {
    this.reload();
  }

  reload() {
    console.log('reload');
    this.concertService.index().subscribe(
      data => {
        console.log('data');
        console.log(data);
        this.concerts = data;
      },

      err => {
        console.log('err');
        console.error('Observer got an error: ' + err);
      }
    );
  }

  addNewConcert() {
    this.concertService.create(this.newConcert).subscribe(
      data => {
        this.reload();
      },
      err => console.error('Observer got an error: ' + err)
    );
    this.newConcert = new Concert();
    this.displayTable();
  }
  displayTable() {
    this.selected = null;
  }

  displayConcert(concert: Concert) {
    this.selected = concert;
    console.log(concert);
  }

  getConcertCount(): number {
    return this.concerts.length;
  }
setNewConcert() {
  this.newConcert = new Concert();
}
  setEditConcert() {
    this.editConcert = Object.assign({}, this.selected);
  }
  setEditNull() {
    this.editConcert = null;
  }
  updateConcert(concert: Concert) {
    this.concertService.update(concert).subscribe(
      data => {
        this.reload();
        this.setEditNull();
        this.selected = data;
      },
      err => console.error('Observer got an error: ' + err)
    );
    // this.reload();
  }
  deleteConcert(id: number) {
    this.concertService.delete(id).subscribe(
      data => {
        this.reload();
      },
      err => console.error('Observer got an error: ' + err)
    );
    // this.reload();
  }
  searchKey(keyword: string) {
    this.concertService.searchKey(keyword).subscribe(
      data => {
        this.concerts.push();
        // this.reload();

      }

    )

      }

  // end of class
}
