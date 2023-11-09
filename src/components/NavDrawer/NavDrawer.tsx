import { useNavigate } from '@solidjs/router';
import { View, Text, IntrinsicNodeProps, ElementNode } from '@lightningjs/solid';
import { Column } from '@lightningjs/solid-primitives';
import styles from './NavDrawer.styles';
import Icon from '../Icon';
import theme from 'theme';

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
          y: 16,
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
    backdrop.states.add('focus');
    this.children.forEach((c) => c.states!.add('active'));
    this.children.selected!.setFocus();
  }

  function onBlur(this: ElementNode) {
    backdrop.states.remove('focus');
    this.selected = 0;
    this.children.forEach((c) => c.states!.remove('active'));
  }

  const BASE_URL = import.meta.env.BASE_URL;

  return (
    <>
      <Column {...props} onFocus={onFocus} onBlur={onBlur} style={styles.Column} animate>
        <NavButton onEnter={() => navigate(BASE_URL + 'browse/all')} icon='trending'>Trending</NavButton>
        <NavButton icon='movie' onEnter={() => navigate(BASE_URL + 'browse/movie')}>Movies</NavButton>
        <NavButton icon='tv' onEnter={() => navigate(BASE_URL + 'browse/tv')}>TV</NavButton>
        <NavButton icon='experiment' onEnter={() => navigate(BASE_URL + 'examples')}>Examples</NavButton>
      </Column>
      <View ref={backdrop} style={styles.Gradient}></View>
    </>
  );
}
