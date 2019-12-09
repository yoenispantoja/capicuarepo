
import { animate, style, transition, trigger, state } from '@angular/animations';

export const enterLeaveAnimation = trigger('enterLeave', [
  state('flyIn', style({ transform: 'translateY(0)' })),
  transition(':enter', [
    style({ transform: 'translateY(-100%)' }),
    animate('0.4s ease-in')
  ]),
  transition(':leave', [
    animate('0.3s ease-out', style({ transform: 'translateY(100%)' }))
  ])
]);
