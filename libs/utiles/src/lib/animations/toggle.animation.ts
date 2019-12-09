import { animate, state, style, transition, trigger } from '@angular/animations';

export const toggleAnimation = trigger('detailExpand', [
    state('collapsed', style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
    state('expanded', style({ height: '*', visibility: 'visible' })),
    state('expanded-noanimation', style({ height: '*', visibility: 'visible' })),
    transition('expanded <=> collapsed', animate('400ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    transition('expanded-noanimation => collapsed', animate('400ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
]);
