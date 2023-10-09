import { Directive, ElementRef, Output, OnInit, OnDestroy, Renderer2, EventEmitter } from '@angular/core';

@Directive({
  selector: '[IntersectionObserver]'
})
export class IntersectionObserverDirective implements OnInit, OnDestroy {
  @Output() inViewport: EventEmitter<boolean> = new EventEmitter<boolean>();

  private removeOutsideViewport: boolean = true;

  private observer?: IntersectionObserver;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: '0px',
      threshold: 0.01, // The percentage of the element's visibility needed to trigger the callback
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
