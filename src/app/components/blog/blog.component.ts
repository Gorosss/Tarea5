import { Component } from '@angular/core';
import { BlogListComponent } from '../blog-list/blog-list.component';
import { FormsModule } from '@angular/forms';
import { IVideoGame } from '../../interfaces/ivideo-game.interfaces';


@Component({
  selector: 'app-blog',
  imports: [BlogListComponent, FormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  newVideoGame: IVideoGame = {
    title: "",
    img: "",
    text: "",
    publicationDate: "",
    gameReleaseDate: "",
    prize: 0
  }
}
