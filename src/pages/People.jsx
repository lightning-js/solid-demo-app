import { Text, View } from '@lightningjs/solid';
import { Column } from '@lightningjs/solid-primitives';
import { useParams } from "@solidjs/router";
import { createEffect, createResource, on } from "solid-js";
import { TileRow } from '../components';
import { setGlobalBackground } from "../state";
import { useNavigate } from "@solidjs/router";
import theme from 'theme';
import styles from '../styles';
import * as provider from '../api/providers/people';

const People = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [data] = createResource(() => ({...params}), provider.getInfo);
  const [credits] = createResource(() => ({...params}), provider.getCredits);

  createEffect(on(data, (data) => {
    setGlobalBackground(data.backgroundImage);
  }, { defer: true}))

  const Backdrop = {
    color: '#000000',
    alpha: 0.8,
    width: 1540,
    height: 440,
    x: 130,
    y: 180,
    borderRadius: 30,
  }

  function onEnter() {
    let entity = this.children.selected;
    navigate(entity.href);
  };

  return (
    <Show when={data()} keyed>
      <View x={150} y={200} style={styles.Column} zIndex={3}>
        <Text style={theme.typography.display2}>{data().name}</Text>
        <Text style={styles.peopleBio}>{data().biography}</Text>
      </View>
      <View style={Backdrop} />
      <Column y={670} x={140} style={styles.Column}>
        <Show when={credits()}>
          <Text skipFocus style={styles.RowTitle}>Credits</Text>
          <TileRow autofocus onEnter={onEnter} items={credits()} />
        </Show>
      </Column>
    </Show>
  );
};

export default People;
