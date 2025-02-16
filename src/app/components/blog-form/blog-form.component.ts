import { Component, EventEmitter, Output } from '@angular/core';
import { IVideoGame } from '../../interfaces/ivideo-game.interfaces';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-blog-form',
  imports: [FormsModule],
  templateUrl: './blog-form.component.html',
  styleUrl: './blog-form.component.css'
})
export class BlogFormComponent {
  newVideoGame: IVideoGame = {
    title: "",
    img: "",
    text: "",
    publicationDate: "",
    gameReleaseDate: "",
    prize: 0
  }

  @Output() sendPost: EventEmitter<IVideoGame> = new EventEmitter();

  publishPost() {
    console.log(this.newVideoGame);
    this.sendPost.emit(this.newVideoGame);
    this.newVideoGame = {
      title: "",
      img: "",
      text: "",
      publicationDate: "",
      gameReleaseDate: "",
      prize: 0
    }
  }
}
