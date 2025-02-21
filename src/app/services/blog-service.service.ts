import { Injectable } from '@angular/core';
import { IVideoGame } from '../interfaces/ivideo-game.interfaces';

@Injectable({
  providedIn: 'root'
})
export class BlogServiceService {

private blogList : IVideoGame[] = [{
  "title": "New Zelda",
  "img": "https://media.revistagq.com/photos/6105a5e0170e728db45e7649/16:9/w_1280,c_limit/Zelda-Breath-of-the-Wild.jpeg",
  "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit",
  "publicationDate": "2025-02-15",
  "gameReleaseDate": "2026-05-15",
  "prize": 60
},
{
  "title": "Elden Ring DLC Shadow of the Elden Lord",
  "img": "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2024/02/elden-ring-3277980.jpg",
  "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit",
  "publicationDate": "2025-02-15",
  "gameReleaseDate": "2026-02-11",
  "prize": 60
}];

insert(event: IVideoGame): any {
  this.blogList.unshift(event);
  return { status: 200, message: 'Post added successfully' };
}

getAll(): IVideoGame[] {
  return this.blogList;
}
}
