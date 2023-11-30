import { IntrinsicNodeProps, View } from '@lightningjs/solid';
import { Row } from '@lightningjs/solid-primitives';
import { For, splitProps } from 'solid-js';
import styles from '../styles';
import { type Tile } from '../api/formatters/ItemFormatter';

export function Thumbnail(props: IntrinsicNodeProps) {
  return <View {...props} animate style={styles.Thumbnail} />
}

export function FocusRing(props: IntrinsicNodeProps) {
  return <View {...props} style={styles.FocusRing} />
}

export interface TileRowProps extends IntrinsicNodeProps {
  items: Tile[];
}

export function TileRow(props: TileRowProps) {
  const [local, others] = splitProps(props, ["items"]);

  return <Row {...others} style={styles.Row}>
   <For each={local.items}>
      {(item) => <Thumbnail {...item} /> }
    </For>
  </Row>

}
