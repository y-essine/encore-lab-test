import { Directive, ElementRef, EventEmitter, Output, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[IntersectionObserver]'
})
export class IntersectionObserverDirective implements OnInit, OnDestroy {
  @Output() inViewport: EventEmitter<boolean> = new EventEmitter<boolean>();

  private observer?: IntersectionObserver;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: '0px',
      threshold: 0.1, // The percentage of the element's visibility needed to trigger the callback
    };

    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        this.inViewport.emit(entry.isIntersecting);
      });
    }, options);

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
