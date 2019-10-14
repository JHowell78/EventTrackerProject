export class Concert {
  id: number;

  artist: string;

  venue: string;

  city: string;

  state: string;

  genre: string;

  date: string;
  // genres: any[];


  constructor(
    id?: number,
    artist?: string,
    venue?: string,
    city?: string,
    state?: string,
    genre?: string,
    date?: string,
    // genres?: []
  ) {
    this.id = id;
    this.artist = artist;
    this.venue = venue;
    this.city = city;
    this.state = state;
    this.genre = genre;
    this.date = date;
    // this.genres = genres;
  }
}
