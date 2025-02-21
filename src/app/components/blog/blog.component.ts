import { Component, Injectable} from '@angular/core';
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
}
