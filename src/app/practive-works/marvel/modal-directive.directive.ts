import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appModalDirective]'
})
export class ModalDirectiveDirective {

  constructor(public viewContainerRef: ViewContainerRef) {
  }

}
