import { useNavigate } from '@solidjs/router';
import { View, Text } from '@lightningjs/solid';
import { Column } from '@lightningjs/solid-primitives';
import styles from './NavDrawer.styles';
import Icon from '../Icon';
import theme from 'theme';

function NavButton(props) {
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
  let column;
  const navigate = useNavigate();

  function onFocus() {
    column.children.forEach((c) => c.states.add('active'));
    column.children.selected.setFocus();
  }

  function onBlur() {
    column.selected = 0;
    column.children.forEach((c) => c.states.remove('active'));
  }

  return (
    <View {...props} forwardStates onFocus={onFocus} onBlur={onBlur}>
      <Column ref={column} style={styles.Column} animate>
        <NavButton onEnter={() => navigate('/browse/all')} icon='trending'>Trending</NavButton>
        <NavButton icon='movie' onEnter={() => navigate('/browse/movie')}>Movies</NavButton>
        <NavButton icon='tv' onEnter={() => navigate('/browse/tv')}>TV</NavButton>
        <NavButton icon='experiment' onEnter={() => navigate('/examples')}>Examples</NavButton>
      </Column>
      <View style={styles.Gradient}></View>
    </View>
  );
}
