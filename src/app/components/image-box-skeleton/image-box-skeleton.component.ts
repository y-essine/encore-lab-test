import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ImageBoxSkeleton',
  templateUrl: './image-box-skeleton.component.html',
})

export class ImageBoxSkeletonComponent implements OnInit {
  @Input({ required: true }) width?: number;
  @Input({ required: true }) height?: number;

  public calculatedHeight: number = 0;

  ngOnInit() {
    this.calculatedHeight = Math.round((this.height as number) * (256 / (this.width as number)));
  }

}
