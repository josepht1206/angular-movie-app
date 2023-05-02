import {
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { FavoriteMoviesService } from '../../services/favorite/favorite.service';
import { NxDialogService, NxModalRef } from '@aposin/ng-aquila/modal';
import { Directionality } from '@angular/cdk/bidi';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  @Input() addDescription: string = '';
  @Input() editDescription: string = '';
  @Input() movies: any[] = [];
  @Input() currentIndex: any;

  @ViewChild('template') templateRef!: TemplateRef<any>;

  templateDialogRef?: NxModalRef<any>;

  constructor(
    private favoriteMoviesService: FavoriteMoviesService,
    private readonly dialogService: NxDialogService,
    private readonly dir: Directionality
  ) {}

  ngOnInit() {
    console.log('currentIndex', this.currentIndex);
  }

  openFromTemplate(): void {
    this.templateDialogRef = this.dialogService.open(this.templateRef, {
      ariaLabel: 'Dialog with direction',
      direction: this.dir.value,
    });
  }
  closeTemplateDialog() {
    this.templateDialogRef?.close();
  }

  addFavoriteMovie(movie: any, addDescription: string) {
    this.favoriteMoviesService.addFavoriteMovie(movie, addDescription);

    this.closeTemplateDialog();
  }

  deleteFavoriteMovie(movie: any) {
    this.favoriteMoviesService.deleteFavoriteMovie(movie);
    console.log('deleted movie ', movie);
    // this.favoriteMovies = this.favoriteMoviesService.getFavoriteMovies();
  }

  editFavoriteMovie(movie: any, editDescription: string) {
    movie.Description = editDescription;
    this.closeTemplateDialog();
    console.log('edited movie', movie);
  }
}
