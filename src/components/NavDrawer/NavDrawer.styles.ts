import { IntrinsicNodeStyleProps, deg2rad, hexColor } from '@lightningjs/solid';
import theme from 'theme';

export default {
  Column: {
    ...(theme.flexColumn as IntrinsicNodeStyleProps),
    width: 320,
    height: 600,
    y: 360,
    gap: 20,
    zIndex: 101,
    transition: { x: {
      duration: 250,
      easing: 'ease-in-out'
    }},
    x: 8,
    focus: {
      x: theme.layout.marginX
    },
  } satisfies IntrinsicNodeStyleProps,
  Gradient: {
    zIndex: 99,
    linearGradient: {
      angle: deg2rad(270),
      stops: [0, 0.4, 0.8],
      colors: [hexColor(theme.color.primary), hexColor(theme.color.primary), hexColor('#00000000')],
    },
    alpha: 0,
    focus: {
      width: 1600,
      alpha: 1
    },
    width: 100,
    height: 1080,
    transition: { alpha: true }
  } satisfies IntrinsicNodeStyleProps,
  NavButton: {
    zIndex: 102,
    height: 70,
    width: 100,
    borderRadius: 8,
    focus: {
      color: hexColor(theme.color.container),
    },
    active: {
      width: 328,
      height: 70,
    },
  } satisfies IntrinsicNodeStyleProps,
};
