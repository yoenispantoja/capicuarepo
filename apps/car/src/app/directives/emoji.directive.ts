import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[capicuarepoEmoji]'
})
export class EmojiDirective implements OnInit {

  constructor(private el: ElementRef) { }

  ngOnInit() {

    this.el.nativeElement.textContent += '✌️';
  }

}
