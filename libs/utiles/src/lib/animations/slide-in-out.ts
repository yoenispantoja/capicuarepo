import { animate, state, style, transition, trigger } from '@angular/animations';

export const slideInOut = trigger('slideInOut', [
  state(
    '0',
    style({
      height: '0px',
      display: 'none',
    }),
  ),
  state(
    '1',
    style({
      height: '*',
      display: 'block',
    }),
  ),
  transition('1 => 0', animate('300ms ease-out')),
  transition('0 => 1', animate('300ms ease-in')),
]);
