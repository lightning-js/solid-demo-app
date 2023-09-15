import { globalBackground } from "../state";
import { View } from "@lightningjs/solid";
import { createEffect, on } from "solid-js";

export default function Background() {
  let bg1, bg2;
  let active = 0;
  const alpha = 0.6;
  const bgStyle = { width: 1920, height: 1080, alpha };
  const animationSettings = { duration: 1000, easing: 'ease-in-out' };

  function onLoad(elm, {width, height}) {
    console.log('LOADED: ', elm, width, height);
  }
  createEffect(on(globalBackground, (img) => {
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
    <View style={{ width: 1920, height: 1080, color: '#1a1a1a'}} />
    <View onLoad={onLoad} ref={bg1} animate animationSettings={animationSettings} {...bgStyle} />
    <View ref={bg2} animate animationSettings={animationSettings} {...bgStyle} alpha="0" />
  </>);
}
