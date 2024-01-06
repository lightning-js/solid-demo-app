import { type AnimationSettings } from "@lightningjs/renderer";
import { globalBackground } from "../state.js";
import { type IntrinsicNodeStyleProps, View, hexColor } from "@lightningjs/solid";
import { createEffect, on } from "solid-js";
import theme from 'theme';

export default function Background() {
  let bg1, bg2;
  let active = 0;
  const alpha = 1;
  const animationSettings = { duration: 1000, easing: 'ease-in-out' } satisfies Partial<AnimationSettings>;
  const bgStyles = { alpha, color: 0xffffffff, transition: {
    alpha: animationSettings
  } } satisfies IntrinsicNodeStyleProps;

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
      bg2.animate({ alpha }, animationSettings).start();
      bg1.animate({ alpha: 0 }, animationSettings).start();
      return;
    }

    if (active === 2) {
      bg1.src = img;
      active = 1;
      // or use the transition property
      bg1.alpha = alpha;
      bg2.alpha = 0;
    }
  }, { defer: true}))

  return (<>
  <View width={1920} height={1080} zIndex={-5}>
    <View ref={bg1} style={bgStyles} />
    <View ref={bg2} style={bgStyles} alpha={0} />
    <View
      effects={{
        radialGradient: {
          colors: [0x0000007C, 0x0000007C, hexColor(theme.color.container)],
          stops: [0, 0.4, 0.9],
          height: 800,
          width: 1920,
          pivot: [0.8, 0], 
        },
      }}
    />
    </View>
  </>);
}
