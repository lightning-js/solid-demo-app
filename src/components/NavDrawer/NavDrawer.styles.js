import theme from 'theme';

export default {
  Column: {
    ...theme.flexColumn,
    width: 320,
    height: 600,
    y: 360,
    gap: 20,
    zIndex: 101,
    x: [8,
      {
        duration: 250,
        easing: 'ease-in-out'
      },
    ],
    focus: {
      x: [
        theme.layout.marginX,
        {
          duration: 250,
          easing: 'ease-in-out'
        },
      ],
    },
  },
  Gradient: {
    zIndex: 99,
    linearGradient: {
      angle: 270,
      stops: [0, 0.4, 0.8],
      colors: [theme.color.primary, theme.color.primary, '#00000000'],
    },
    alpha: [0],
    focus: {
      width: 1600,
      alpha: [1],
    },
    width: 100,
    height: 1080,
  },
  NavButton: {
    zIndex: 102,
    height: 70,
    width: 100,
    borderRadius: 8,
    focus: {
      color: theme.color.container,
    },
    active: {
      width: 328,
      height: 70,
    },
  },
};
