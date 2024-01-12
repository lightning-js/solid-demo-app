import { createEffect, on } from "solid-js";
import { useNavigate } from "@solidjs/router";
import { View, activeElement, hexColor} from "@lightningjs/solid";
import { useFocusManager, useAnnouncer } from "@lightningjs/solid-primitives";
import Background from '../components/Background';
import NavDrawer from '../components/NavDrawer/NavDrawer';
import { FocusRing, FPSCounter } from '../components';
import theme from 'theme';
import { assertTruthy } from "@lightningjs/renderer/utils";

declare module '@lightningjs/solid-primitives' {
  // Augment the FocusManager KeyMap interface with our custom keys
  interface KeyMap {
    Announcer: string;
    Menu: string;
    Escape: string;
  }
}

declare module '@lightningjs/solid' {
  interface ElementNode {
    heroContent?: boolean;
    backdrop?: any;
    entityInfo?: any;
    href?: string;
  }
}

const App = (props) => {
  useFocusManager({
    Announcer: 'a',
    Menu: 'm',
    Escape: 'Escape',
  });
  const announcer = useAnnouncer();
  announcer.enabled = false;
  const navigate = useNavigate();

  let focusRingRef, navDrawer, lastFocused;

  createEffect(on(activeElement, (elm) => {
    assertTruthy(elm);
    setTimeout(() => {
      if (elm.heroContent) {
        focusRingRef.parent = elm.parent;
        focusRingRef.alpha = 0;
        focusRingRef.scale = 1;
        focusRingRef.x = elm.x! - 5;
        focusRingRef.y = elm.y! - 5;
        focusRingRef.width = elm.width! + 10;
        focusRingRef.height = elm.height! + 10;
        focusRingRef.animate({ scale: 1.1, alpha: 1 }).start();
      } else {
        focusRingRef.alpha = 0;
      }
    }, 10)
  }, { defer: true}))

  return (
    <View ref={window.APP}
      onAnnouncer={() => announcer.enabled = !announcer.enabled}
      onLast={() => history.back()}
      onMenu={() => navigate('/')} style={{ width: 1920, height: 1080 }}
      onLeft={() => {
        if (navDrawer.states.has('focus')) {
          return false;
        }
        lastFocused = activeElement();
        navDrawer.setFocus();
      }}
      onRight={() => navDrawer.states.has('focus') && lastFocused.setFocus()}>
      <Background />
      <FPSCounter fps={props.fps} />
      <FocusRing color={hexColor(theme.color.focus)} ref={focusRingRef} />
      
      {props.children}
      
      <NavDrawer ref={navDrawer} />
      {/* <VideoPlayer ref={videoPlayer} /> */}
    </View>
  )
};

export default App;
