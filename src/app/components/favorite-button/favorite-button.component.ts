import { Component, Input } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage-service.service';

@Component({
  selector: 'FavoriteButton',
  templateUrl: './favorite-button.component.html',
})

export class FavoriteButtonComponent {
  @Input({ required: true }) imageId?: number;

  @Input({ required: true }) isFavorite: boolean = false;

  constructor(private localStorageService: LocalStorageService) { }

  public onClick(): void {
    this.isFavorite = !this.isFavorite;
    if (this.isFavorite) {
      this.localStorageService.addFavorite(this.imageId as number);
    } else {
      this.localStorageService.removeFavorite(this.imageId as number);
    }
  }
}
