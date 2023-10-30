import {
  animate,
  group,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const routerAnimation = trigger('routerAnimation', [
  transition('* <=> *', [
    query(
      ':enter, :leave',
      style({
        position: 'absolute',
        zIndex: 100,
        width: '100%',
        backgroundColor: '#f1f1f1',
      }),
      { optional: true }
    ),
    group([
      query(
        ':enter',
        [
          style({ transform: 'translateY(100%) scale(0%) ' }),
          animate('0.5s ease', style({})),
        ],
        {
          optional: true,
        }
      ),
      query(
        ':leave',
        [style({}), animate('0.3s ease-out', style({ opacity: 0 }))],
        {
          optional: true,
        }
      ),
    ]),
  ]),
]);
