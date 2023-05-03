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

  selectedMovies: any;
  showAddfavoriteModal: boolean = false;

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

  openFromTemplate(movie: any): void {
    // this.templateDialogRef = this.dialogService.open(this.templateRef, {
    //   ariaLabel: 'Dialog with direction',
    //   direction: this.dir.value,
    // });
    this.selectedMovies = movie;
    this.showAddfavoriteModal = true;
  }
  closeTemplateDialog() {
    this.templateDialogRef?.close();
  }

  addEditFavoriteMovie(addDescription: string) {
    if (this.currentIndex === 0) {
      this.favoriteMoviesService.addFavoriteMovie(
        this.selectedMovies,
        addDescription
      );
    } else {
      this.selectedMovies.Description = addDescription;
      this.closeTemplateDialog();
      console.log('edited movie', this.selectedMovies);
      this.currentIndex = 1;
    }

    this.showAddfavoriteModal = false;
    // this.closeTemplateDialog();
  }

  deleteFavoriteMovie(movie: any) {
    this.favoriteMoviesService.deleteFavoriteMovie(movie);
    console.log('deleted movie ', movie);
    // this.favoriteMovies = this.favoriteMoviesService.getFavoriteMovies();
  }

  // editFavoriteMovie(movie: any, editDescription: string) {
  //   movie.Description = editDescription;
  //   this.closeTemplateDialog();
  //   console.log('edited movie', movie);
  // }
}
