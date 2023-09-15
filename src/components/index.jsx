import { Row, View } from '@lightningjs/solid';
import { splitProps } from 'solid-js';
import styles from '../styles';

export const RoundedRectangle = ['RoundedRectangle', { radius: 15 }];

export function Thumbnail(props) {
  return <View {...props} animate style={styles.Thumbnail} />
}

export function FocusRing(props) {
  return <View {...props} shader={RoundedRectangle} style={styles.FocusRing} />
}

export function TileRow(props) {
  const [local, others] = splitProps(props, ["items"]);
  const onBlur = function() {
    this.selected = 0;
  }
  return <Row {...others} style={styles.Row} onBlur={onBlur}>
   <For each={local.items}>
      {(item) => <Thumbnail {...item} shader={RoundedRectangle} /> }
    </For>
  </Row>

}
