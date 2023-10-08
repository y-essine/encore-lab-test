import { Injectable } from '@angular/core';
import { Image } from '../models/Image';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ImageService {

  URI: string = 'https://picsum.photos';

  generatedImages: Image[] = [];

  constructor(private http: HttpClient) {
    // generate 1000 images
    for (let i = 0; i < 1000; i++) {
      this.generatedImages.push({
        id: i,
        photo: `${this.URI}/id/${i}/300/200.webp`,
        author: '...',
        width: 300,
        height: 200,
      });
    }
    // double the images
    // this.generatedImages = [...this.generatedImages, ...this.generatedImages];
    // reach 4K images
    // this.generatedImages = [...this.generatedImages, ...this.generatedImages];
  }

  public getImages(): Observable<Image[]> {
    return this.http.get<Image[]>(`${this.URI}/v2/list`);
  }

  public getGeneratedImages(): Observable<Image[]> {
    // simulate a get request with a delay of 1 second
    return new Observable<Image[]>((subscriber) => {
      setTimeout(() => {
        subscriber.next(this.generatedImages);
        subscriber.complete();
      }, 1000);
    });
  }

  public getImageInfo(id: number): Observable<any> {
    return this.http.get<any>(`${this.URI}/id/${id}/info`);
  }

}
