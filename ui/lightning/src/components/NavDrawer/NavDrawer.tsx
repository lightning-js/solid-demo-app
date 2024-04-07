import { useMatch, useNavigate } from "@solidjs/router";
import {
  View,
  Text,
  IntrinsicNodeProps,
  ElementNode,
} from "@lightningjs/solid";
import { Column } from "@lightningjs/solid-ui";
import styles from "./NavDrawer.styles";
import Icon from "../Icon";
import theme from "theme";

interface NavButtonProps extends IntrinsicNodeProps {
  icon: string;
  children: string;
}

function NavButton(props: NavButtonProps) {
  return (
    <View {...props} forwardStates style={styles.NavButton}>
      <View y={-16}>
        <Icon scale={0.5} name={props.icon} />
      </View>
      <Text
        style={{
          ...theme.typography.button1,
          fontSize: 38,
          x: 116,
          y: 24,
          height: 50,
          alpha: 0,
          active: {
            alpha: 1,
          },
        }}
      >
        {props.children}
      </Text>
    </View>
  );
}

export default function NavDrawer(props) {
  let backdrop;
  const navigate = useNavigate();
  function onFocus(this: ElementNode) {
    backdrop.states.add("focus");
    this.children.forEach((c) => c.states!.add("active"));
    this.children.selected!.setFocus();
  }

  function onBlur(this: ElementNode) {
    backdrop.states.remove("focus");
    this.selected = 0;
    this.children.forEach((c) => c.states!.remove("active"));
  }

  function handleNavigate(page: string) {
    const isOnPage = useMatch(() => page);
    if (isOnPage()) {
      return props.focusPage();
    }

    navigate(page);
  }

  return (
    <>
      <View
        flexItem={false}
        x={40}
        y={30}
        zIndex={105}
        alpha={props.showWidgets ? 1 : 0}
      >
        <Text x={80} fontSize={28} color={0xf6f6f644}>
          Built With:
        </Text>
        <View y={22} src="./assets/solidWord.png" width={280} height={52} />
      </View>
      <Column
        {...props}
        onFocus={onFocus}
        onBlur={onBlur}
        style={styles.Column}
        scroll="none"
      >
        <NavButton
          onEnter={() => handleNavigate("/browse/all")}
          icon="trending"
        >
          Trending
        </NavButton>
        <NavButton icon="movie" onEnter={() => handleNavigate("/browse/movie")}>
          Movies
        </NavButton>
        <NavButton icon="tv" onEnter={() => handleNavigate("/browse/tv")}>
          TV
        </NavButton>
        <NavButton
          icon="experiment"
          onEnter={() => handleNavigate("/examples")}
        >
          Examples
        </NavButton>
      </Column>
      <View ref={backdrop} style={styles.Gradient}></View>
    </>
  );
}
