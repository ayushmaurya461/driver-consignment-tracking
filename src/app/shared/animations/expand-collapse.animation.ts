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
      padding: '20px 20px',
      transform: 'scaleX(1) scaleY(1)',
      opacity: 1,
    })
  ),
  state(
    'collapse',
    style({
      height: '0px',
      padding: '0px 20px',
      transform: 'scaleX(0) scaleY(0)',
      opacity: 0,
    })
  ),
  transition('collapse <=> expand', [animate('0.6s ease')]),
]);
