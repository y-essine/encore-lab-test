import { NgModule } from '@angular/core';
import { FeatherModule } from 'angular-feather';
import { Heart, ChevronDown, Search } from 'angular-feather/icons';

const icons = {
  Heart,
  ChevronDown,
  Search
};

@NgModule({
  imports: [
    FeatherModule.pick(icons)
  ],
  exports: [
    FeatherModule
  ]
})
export class IconsModule { }
