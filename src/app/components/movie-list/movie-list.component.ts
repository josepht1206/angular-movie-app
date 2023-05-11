import {
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { FavoriteMoviesService } from '../../services/favorite/favorite.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  @Input() addDescription: string = '';
  @Input() editDescription: string = '';
  @Input() movies: any[] = [];
  @Input() currentIndex: any;

  selectedMovies: any;
  showAddfavoriteModal: boolean = false;

  @ViewChild('template') templateRef!: TemplateRef<any>;

  constructor(private favoriteMoviesService: FavoriteMoviesService) {}

  ngOnInit() {
    console.log('currentIndex', this.currentIndex);
  }

  openFromTemplate(movie: any): void {
    this.selectedMovies = movie;
    this.showAddfavoriteModal = true;
  }
  closeModal() {
    this.showAddfavoriteModal = false;
  }

  addEditFavoriteMovie(addDescription: string) {
    if (this.currentIndex === 0) {
      this.favoriteMoviesService.addFavoriteMovie(
        this.selectedMovies,
        addDescription
      );
    } else {
      this.favoriteMoviesService.updateFavoriteMovie(
        this.selectedMovies,
        addDescription
      );
      this.closeModal();
      console.log('edited movie', this.selectedMovies);
      this.currentIndex = 1;
    }
    this.showAddfavoriteModal = false;
  }

  deleteFavoriteMovie(movie: any) {
    this.favoriteMoviesService.deleteFavoriteMovie(movie);
    console.log('deleted movie ', movie);
  }
}
