import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appActive]'
})
export class ActiveDirective {

  @Input('appActive') set isActive(yes: boolean) {
    if (yes) {
      this.bgColor = '#0c5460';
      this.fontColor = 'white';
    }
    else {
      this.bgColor = 'transparent';
      this.fontColor = 'black';
    }
  }

  @HostBinding('style.backgroundColor') bgColor: string;
  @HostBinding('style.color') fontColor: string;

  constructor() { }

}
