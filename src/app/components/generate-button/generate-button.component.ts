import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'GenerateButton',
  templateUrl: './generate-button.component.html',
})

export class GenerateButtonComponent {

  @Input({ required: true }) public isLoading = false;
  @Input({ required: true }) public isLoaded = false;
  @Output() public buttonClick: EventEmitter<any> = new EventEmitter();

  onButtonClick() {
    this.buttonClick.emit();
  }

}
