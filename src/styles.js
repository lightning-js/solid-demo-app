import theme from 'theme';

export default {
  Page: {
    width: 1920, height: 1080
  },
  itemsContainer: {
    width: theme.layout.screenW,
    height: 600,
    y: 560,
    x: 0
  },
  Thumbnail: {
    borderRadius: 16,
    width: 185, height: 278, scale: 1, zIndex: 2,
    focus: { scale: 1.1 }
  },
  FocusRing: {
    borderRadius: 16,
    width: 194, height: 286, y: -5, x: -5
  },
  showHeadline: { x: 70, y: 20 },
  headlineBlur: { width: 1920, height: 150, x: 0, y: 0, zIndex: 14, alpha: 0.9, color: '#000000' },
  TileRowText: { height: 100, fontSize: 80, color: '#f0f0f0' },
  Row: {
    display: 'flex',
    justifyContent: 'spaceBetween',
    height: 300,
  },
  Column: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flexStart',
    gap: 20,
    width: theme.layout.screenW - (2 * theme.layout.marginX),
    x: theme.layout.marginX,
    y: 48
  },
  Rect: {
    width: 250,
    height: 100,
    y: 10,
    x: 300,
    color: '#0000ff'
  },
};

const Button = {
  width: 386,
  height: 136,
  color: '#000000',
  alpha: 0.3,
  borderRadius: 30,
  border: { width: 5, color: '#cc33ff' },
  scale: 1,
  focus: {
    color: ['#58807d', {duration: 2000}],
    scale: 1.2,
    border: { width: 5, color: '#ff0000' },
    alpha: [1, {duration: 1500, delay: 200, timing: "easy-in"}]
  },
  active: {
    color: '#33ff55'
  },
  disabled: {
    alpha: 1,
  }
};

const TopBar = {
  color: '#00A699',
  height: 8,
  y: 2,
  x: -4,
  width: Button.width + 8
}

const ButtonText = {
  fontSize: 32,
  lineHeight: Button.height,
  contain: 'width',
  textAlign: 'center',
  mountY: -0.35,
  color: '#F6F6F9',
  height: Button.height,
  width: Button.width,
  focus: {
    fontSize: 64
  }
}

export const buttonStyles = {
  container: Button,
  topBar: TopBar,
  text: ButtonText
}


export const MaterialButton = {
  width: 386,
  height: 136,
  color: '#715cab',
  focus: {
    color: '#5a39a2',
  },
  disabled: {
    color: '#291d43',
  }
};

export const MaterialButtonText = {
  fontSize: 32,
  contain: 'width',
  textAlign: 'center',
  mountY: -0.35,
  color: '#FFFFFF',
  height: MaterialButton.height,
  width: MaterialButton.width,
  lineHeight: MaterialButton.height,
  focus: {
    fontSize: 40
  },
  disabled: {
    color: '#909090',
  }
}
