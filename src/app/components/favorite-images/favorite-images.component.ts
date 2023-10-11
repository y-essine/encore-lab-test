import { Component } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage-service.service';

@Component({
  selector: 'FavoriteImagesList',
  templateUrl: './favorite-images.component.html',
})

export class FavoriteImagesComponent {

  public showList: boolean = false;
  public favorites: any[] = [];

  constructor(private localStorageService: LocalStorageService) { }

  ngAfterViewInit() {
    this.favorites = this.localStorageService.getFavorites();
    console.log(this.favorites);
  }

  onClick() {
    this.showList = !this.showList;
    if (this.showList)
      this.favorites = this.localStorageService.getFavorites();
  }
}
