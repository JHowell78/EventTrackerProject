import { Concert } from './../../models/concert';
import { Component, OnInit } from '@angular/core';
import { ConcertService } from 'src/app/services/concert.service';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  editConcert: Concert = null;
  newConcert: Concert = new Concert();
  selected: Concert = null;
  title = 'Concert Count:   ';
  concerts: Concert[] = [];
  navbarCollapsed = true;

  constructor(private concertService: ConcertService) {}

  // constructor() { }

  ngOnInit() {
    this.reload();

  }

  toggleNavbarCollapsing() {
      this.navbarCollapsed = !this.navbarCollapsed;
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
  addNewConcert() {
    this.concertService.create(this.newConcert).subscribe(
      data => {
        this.reload();
      },
      err => console.error('Observer got an error: ' + err)
    );
    this.newConcert = new Concert();
  }
  searchKey(keyword: string) {
    this.concertService.searchKey(keyword).subscribe(
      data => {
        this.concerts.push();
        // this.reload();

      }

    )

      }
}
