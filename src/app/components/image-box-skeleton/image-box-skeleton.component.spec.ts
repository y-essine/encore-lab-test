import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageBoxSkeletonComponent } from './image-box-skeleton.component';

describe('ImageBoxSkeletonComponent', () => {
  let component: ImageBoxSkeletonComponent;
  let fixture: ComponentFixture<ImageBoxSkeletonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageBoxSkeletonComponent]
    });
    fixture = TestBed.createComponent(ImageBoxSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
