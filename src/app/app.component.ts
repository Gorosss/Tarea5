import { Component } from '@angular/core';
import { BlogComponent } from './components/blog/blog.component';
import { IVideoGame } from './interfaces/ivideo-game.interfaces';

@Component({
  selector: 'app-root',
  imports: [BlogComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tarea5';
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
}
