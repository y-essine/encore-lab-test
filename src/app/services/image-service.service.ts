import { Injectable } from '@angular/core';
import { Image } from '../models/Image';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ImageService {

  URI: string = 'https://picsum.photos';

  constructor(private http: HttpClient) { }

  public getImages(): Observable<Image[]> {
    return this.http.get<Image[]>(`${this.URI}/v2/list`);
  }

}
