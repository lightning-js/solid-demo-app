import { AnimationSettings } from "@lightningjs/renderer";
import { globalBackground } from "../state.js";
import { IntrinsicNodeStyleProps, View, hexColor } from "@lightningjs/solid";
import { createEffect, on } from "solid-js";
import theme from 'theme';

export default function Background() {
  let bg1, bg2;
  let active = 0;
  const alpha = 1;
  const bgStyles = { alpha, color: hexColor('#ffffffff') } satisfies IntrinsicNodeStyleProps;
  const animationSettings = { duration: 1000, easing: 'ease-in-out' } satisfies Partial<AnimationSettings>;

  createEffect(on(globalBackground, (img: string) => {
    if (img.startsWith('#')) {
      bg1.color = img;
      bg1.src = '';
      bg1.alpha = 1;
      active = 1;
      bg2.alpha = 0;
      return;
    } else {
      bg1.color = 0xffffffff;
    }

    if (active === 0) {
      bg1.src = img;
      active = 1;
      return;
    }

    if (active === 1) {
      bg2.src = img;
      active = 2;
      // array animation works
      bg2.alpha = [alpha];
      bg1.alpha = [0];
      return;
    }

    if (active === 2) {
      bg1.src = img;
      active = 1;
      // or use the animate property
      bg1.alpha = alpha;
      bg2.alpha = 0;
    }
  }, { defer: true}))

  return (<>
  <View width={1920} height={1080} color={hexColor('#000000')}>
    <View ref={bg1} animate animationSettings={animationSettings} style={bgStyles} />
    <View ref={bg2} animate animationSettings={animationSettings} style={bgStyles} alpha={0} />
    <View
      effects={{
        radialGradient: {
          colors: ['#336699ff', '#336699ff', 0x000000ff],
          stops: [0, 0.4, 1.0],
          height: 720,
          width: 1920,
          pivot: [0.8, 0],
        },
      }}
    />
    </View>
  </>);
}
