import { useNavigate } from "@solidjs/router";
import { View, activeElement, hexColor, renderer } from "@lightningjs/solid";
import { useFocusManager, useAnnouncer } from "@lightningjs/solid-primitives";
import Background from "../components/Background";
import NavDrawer from "../components/NavDrawer/NavDrawer";
import { FocusRing } from "../components";
import { FPSCounter, setupFPS } from "../components/FPSCounter";
import { assertTruthy } from "@lightningjs/renderer/utils";
import { onMount } from "solid-js";

declare module "@lightningjs/solid-primitives" {
  // Augment the FocusManager KeyMap interface with our custom keys
  interface KeyMap {
    Announcer: string;
    Menu: string;
    Escape: string;
  }
}

declare module "@lightningjs/solid" {
  interface ElementNode {
    heroContent?: boolean;
    backdrop?: any;
    entityInfo?: any;
    href?: string;
  }
}

const App = (props) => {
  useFocusManager({
    Announcer: "a",
    Menu: "m",
    Escape: "Escape",
  });
  const announcer = useAnnouncer();
  announcer.enabled = false;
  const navigate = useNavigate();

  let focusRingRef, navDrawer, lastFocused, happy;

  onMount(() => {
    setupFPS({ renderer });
  });

  return (
    <View
      onAnnouncer={() => (announcer.enabled = !announcer.enabled)}
      onLast={() => history.back()}
      onMenu={() => navigate("/")}
      style={{ width: 1920, height: 1080 }}
      onLeft={() => {
        if (navDrawer.states.has("focus")) {
          return false;
        }
        lastFocused = activeElement();
        navDrawer.setFocus();
      }}
      onRight={() => navDrawer.states.has("focus") && lastFocused.setFocus()}
    >
      <Background />
      <FPSCounter />

      {props.children}

      <NavDrawer ref={navDrawer} />
      {/* <VideoPlayer ref={videoPlayer} /> */}
    </View>
  );
};

export default App;
