import { Component, EventEmitter, inject, Output } from '@angular/core';
import { IVideoGame } from '../../interfaces/ivideo-game.interfaces';
import { FormsModule, NgForm } from '@angular/forms';
import { NgIf } from '@angular/common';
import { BlogServiceService } from '../../services/blog-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-blog-form',
  imports: [FormsModule, NgIf],
  templateUrl: './blog-form.component.html',
  styleUrl: './blog-form.component.css',
})
export class BlogFormComponent {

  initialValues = {
    title: "",
    img: "",
    text: "",
    gameReleaseDate: "",
    prize: ""
  };
 
  errors: any = {
    title: '',
    img: '',
    text: '',
    gameReleaseDate: '',
    prize: '',
  };

  blogComponentService = inject(BlogServiceService);

  publishPost(newGameForm : NgForm) {

    let newVideoGame : IVideoGame = newGameForm.value;


    if (!this.validateForm(newVideoGame)) {
      return;
    }


    newVideoGame.publicationDate = new Date().toISOString().split('T')[0]

    let response = this.blogComponentService.insert(newVideoGame);

    if(response.status === 200) {
      newGameForm.resetForm( this.initialValues );
      Swal.fire({
        title: 'Congrats!',
        icon: 'success',
        text: response.message,
        confirmButtonText: 'Ok',
      })
    }


  }

  validateForm( newVideoGame : IVideoGame ): boolean {
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
    if (!newVideoGame.title.trim() || newVideoGame.title.length === null) {
      this.errors.title = 'Title is required';
      isValid = false;
    }

    if (!newVideoGame.img.trim() || newVideoGame.title.length === null) {
      this.errors.img = 'Image URL is required';
      isValid = false;
    }

    if (!newVideoGame.text.trim() || newVideoGame.title.length === null) {
      this.errors.text = 'Description is required';
      isValid = false;
    }

    if (!newVideoGame.gameReleaseDate.trim() || newVideoGame.title.length === null) {
      this.errors.gameReleaseDate = 'Game realease date is required';
      isValid = false;
    }

    if (newVideoGame.prize <= 0) {
      this.errors.prize = 'Game prize must be greater than 0';
      isValid = false;
    }


    return isValid;
  }
}
