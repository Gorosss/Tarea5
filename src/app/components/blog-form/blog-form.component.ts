import { Component, EventEmitter, Output } from '@angular/core';
import { IVideoGame } from '../../interfaces/ivideo-game.interfaces';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-blog-form',
  imports: [FormsModule, NgIf],
  templateUrl: './blog-form.component.html',
  styleUrl: './blog-form.component.css',
})
export class BlogFormComponent {
  newVideoGame: IVideoGame = {
    title: '',
    img: '',
    text: '',
    publicationDate: '',
    gameReleaseDate: '',
    prize: 0,
  };

  errors: any = {
    title: '',
    img: '',
    text: '',
    gameReleaseDate: '',
    prize: '',
  };

  @Output() sendPost: EventEmitter<IVideoGame> = new EventEmitter();

  publishPost() {
    if (!this.validateForm()) {
      return;
    }

    this.newVideoGame.publicationDate = new Date().toISOString().split('T')[0]

    this.sendPost.emit(this.newVideoGame);

    // Reset form
    this.newVideoGame = {
      title: '',
      img: '',
      text: '',
      publicationDate: '',
      gameReleaseDate: '',
      prize: 0,
    };
  }

  validateForm(): boolean {
    let isValid = true;

    // Reset errors
    this.errors = {
      title: '',
      img: '',
      text: '',
      publicationDate: '',
      gameReleaseDate: '',
      prize: '',
    };

    // Validaciones individuales
    if (!this.newVideoGame.title.trim()) {
      this.errors.title = 'Title is required';
      isValid = false;
    }

    if (!this.newVideoGame.img.trim()) {
      this.errors.img = 'Image URL is required';
      isValid = false;
    }

    if (!this.newVideoGame.text.trim()) {
      this.errors.text = 'Description is required';
      isValid = false;
    }

    if (!this.newVideoGame.gameReleaseDate.trim()) {
      this.errors.gameReleaseDate = 'Game realease date is required';
      isValid = false;
    }

    if (this.newVideoGame.prize <= 0) {
      this.errors.prize = 'Game prize must be greater than 0';
      isValid = false;
    }

    return isValid;
  }
}
