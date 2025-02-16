import { Component} from '@angular/core';
import { BlogFormComponent } from '../blog-form/blog-form.component';
import { IVideoGame } from '../../interfaces/ivideo-game.interfaces';
import { BlogListComponent } from '../blog-list/blog-list.component';


@Component({
  selector: 'app-blog',
  imports: [BlogFormComponent, BlogListComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  blogList : IVideoGame[] = [
    {
      "title": "Nuevo Zelda anunciado",
      "img": "https://example.com/zelda.jpg",
      "text": "Nintendo ha anunciado un nuevo juego de Zelda...",
      "publicationDate": "2025-02-15",
      "gameReleaseDate": "2025-02-15",
      "prize": 60
    },
    {
      "title": "DLC de Elden Ring",
      "img": "https://example.com/zeeldenringlda.jpg",
      "text": "FromSoftware lanzará un DLC para Elden Ring...",
      "publicationDate": "2025-02-15",
      "gameReleaseDate": "2024-02-15",
      "prize": 60
    }
  ];

  getDataForm(event: IVideoGame) {
    this.blogList.push(event);
    console.log(this.blogList)
  }
}
