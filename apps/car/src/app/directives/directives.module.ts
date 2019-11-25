import { EmojiDirective } from './emoji.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EmojiDirective],
  exports: [EmojiDirective]
})
export class DirectivesModule { }
