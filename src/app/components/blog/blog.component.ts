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
      "img": "https://media.revistagq.com/photos/6105a5e0170e728db45e7649/16:9/w_1280,c_limit/Zelda-Breath-of-the-Wild.jpeg",
      "text": "Nintendo ha anunciado un nuevo juego de Zelda...",
      "publicationDate": "2025-02-15",
      "gameReleaseDate": "2025-02-15",
      "prize": 60
    },
    {
      "title": "DLC de Elden Ring",
      "img": "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2024/02/elden-ring-3277980.jpg",
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
