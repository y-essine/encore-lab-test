import { Component, Input } from '@angular/core';
import { Image } from 'src/app/models/Image';

@Component({
  selector: 'ImageBox',
  templateUrl: './image-box.component.html',
  styleUrls: ['./image-box.component.less']
})

export class ImageBoxComponent {
  @Input({ required: true }) image?: Image;
}
