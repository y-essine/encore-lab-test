import { Component } from '@angular/core';

@Component({
  selector: 'FavoriteButton',
  templateUrl: './favorite-button.component.html',
})

export class FavoriteButtonComponent {
  public isFavorite: boolean = false;

  public onClick(): void {
    this.isFavorite = !this.isFavorite;
  }
}
