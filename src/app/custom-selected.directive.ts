import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appCustomSelected]'
})
export class CustomSelectedDirective {

  constructor() { }

  @HostBinding('class.item-selected') isSelected = false;

  @HostListener('click')
   onDirectiveClick() {
     this.isSelected = !this.isSelected;
  }

}
