import { useNavigate } from "@solidjs/router";
import { View, activeElement, hexColor} from "@lightningjs/solid";
import { useFocusManager, useAnnouncer } from "@lightningjs/solid-primitives";
import Background from '../components/Background';
import NavDrawer from '../components/NavDrawer/NavDrawer';
import { FocusRing } from '../components';
import { FPSCounter } from '../components/FPSCounter';
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
      <FPSCounter />
      
      {props.children}
      
      <NavDrawer ref={navDrawer} />
      {/* <VideoPlayer ref={videoPlayer} /> */}
    </View>
  )
};

export default App;
