import { Injectable } from '@angular/core';
import { Image } from '../models/Image';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ImageService {

  constructor(private http: HttpClient) { }

  // get images from assets/image_data.json
  public getImages(): Observable<Image[]> {
    // simulate network latency
    return new Observable<Image[]>((observer) => {
      setTimeout(() => {
        this.http.get<Image[]>('assets/image_data.json').subscribe((images: Image[]) => {
          observer.next(images);
          observer.complete();
        });
      }, 1000);

    });
  }

}
