import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})

export class LocalStorageService {
  private encryptionKey = environment.secretKey;

  addFavorite(favoriteId: number): void {
    let existingFavorites = this.getFavorites();

    if (!existingFavorites) {
      existingFavorites = [];
    }

    existingFavorites.push(favoriteId);

    const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(existingFavorites), this.encryptionKey).toString();
    localStorage.setItem('favorites', encryptedData);
  }

  removeFavorite(favoriteId: number): void {
    let existingFavorites = this.getFavorites();

    if (existingFavorites) {
      const index = existingFavorites.indexOf(favoriteId);
      if (index !== -1) {
        existingFavorites.splice(index, 1);
        const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(existingFavorites), this.encryptionKey).toString();
        localStorage.setItem('favorites', encryptedData);
      }
    }
  }

  getFavorites(): number[] {
    const encryptedData = localStorage.getItem('favorites');
    if (encryptedData) {
      const decryptedData = CryptoJS.AES.decrypt(encryptedData, this.encryptionKey).toString(CryptoJS.enc.Utf8);
      if (decryptedData) {
        return JSON.parse(decryptedData);
      }
    }
    return [];
  }
}
