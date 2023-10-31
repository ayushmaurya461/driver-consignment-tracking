import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const expandCollapse = trigger('expandCollapse', [
  state(
    'expand',
    style({
      height: '230px',
      padding: '20px 20px',
      transform: 'scaleX(1)',
    })
  ),
  state(
    'collapse',
    style({
      height: '0px',
      padding: '0px 20px',
      transform: 'scaleX(0)',
    })
  ),
  transition('collapse <=> expand', [animate('1s ease')]),
]);
