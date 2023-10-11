import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'LoadButton',
  templateUrl: './load-button.component.html',
})

export class LoadButtonComponent {

  @Input({ required: true }) public isLoading = false;
  @Input({ required: false }) public isLoaded = false;
  @Output() public buttonClick: EventEmitter<any> = new EventEmitter();

  onButtonClick() {
    this.buttonClick.emit();
  }

}
