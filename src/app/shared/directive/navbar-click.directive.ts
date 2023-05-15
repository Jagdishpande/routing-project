import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appNavbarClick]'
})
export class NavbarClickDirective {

  constructor() { }


  @HostListener('click', ['$event'])
  onclick(eve: Event) {
    let ele = eve.target as HTMLElement

    ele.closest('button')?.nextElementSibling?.classList.toggle('show')
  }


}