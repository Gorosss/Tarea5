import { Component, inject, input } from '@angular/core';
import { IVideoGame } from '../../interfaces/ivideo-game.interfaces';
import { BlogServiceService } from '../../services/blog-service.service';

@Component({
  selector: 'app-blog-list',
  imports: [],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.css'
})
export class BlogListComponent {
  articles : IVideoGame[] = [];

  blogComponentService = inject(BlogServiceService);
  
  ngOnInit() {
    this.articles = this.blogComponentService.getAll();
  }

}
