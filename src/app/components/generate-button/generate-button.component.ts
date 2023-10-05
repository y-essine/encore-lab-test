import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'GenerateButton',
  templateUrl: './generate-button.component.html',
  styleUrls: ['./generate-button.component.less']
})

export class GenerateButtonComponent {

  @Input({ required: true }) public isLoading = false;
  @Output() public buttonClick: EventEmitter<any> = new EventEmitter();

  onButtonClick() {
    this.buttonClick.emit();
  }

}
