import {Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding} from '@angular/core';
import * as events from "events";
import {Event} from "@angular/router";

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
  @HostBinding('class.open') isOpen: Boolean;

  // constructor(private elRef: ElementRef, private renderer: Renderer2) {
  // }
  constructor() {
  }
  @HostListener('click') toggleOpen(eventData: Event){
    this.isOpen = !this.isOpen;
}
  ngOnInit() {
  }
}
