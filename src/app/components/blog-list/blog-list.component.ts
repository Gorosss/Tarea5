import { Component, input } from '@angular/core';
import { IVideoGame } from '../../interfaces/ivideo-game.interfaces';

@Component({
  selector: 'app-blog-list',
  imports: [],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.css'
})
export class BlogListComponent {
  articles = input<IVideoGame[]>([]);

  ngDoCheck() {
    console.log(this.articles(), "articles")
  }
}
