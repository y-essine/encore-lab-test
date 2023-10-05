import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'SearchBox',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent {
  @Output() public search: EventEmitter<any> = new EventEmitter();
  @Input({ required: true }) public isDisabled: boolean = false;

  public keyword: string = '';

  public isFocused: boolean = false;

  public onFocus() {
    this.isFocused = true;
  }

  public onBlur() {
    this.isFocused = false;
  }

  public onInput() {
    this.search.emit(this.keyword);
  }

}
