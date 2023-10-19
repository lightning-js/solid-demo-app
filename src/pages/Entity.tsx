import { ElementNode, Text, View, Show, hexColor } from '@lightningjs/solid';
import { Column } from '@lightningjs/solid-primitives';
import { useParams } from "@solidjs/router";
import { createEffect, createResource, on } from "solid-js";
import { TileRow } from '../components';
import { setGlobalBackground } from "../state";
import ContentBlock from "../components/ContentBlock";
import { useNavigate } from "@solidjs/router";
import styles from '../styles';
import * as provider from '../api/providers/entity';
import { assertTruthy } from '@lightningjs/renderer/utils';

const Entity = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [data] = createResource(() => ({...params}), provider.getInfo);
  const [credits] = createResource(() => ({...params}), provider.getCredits);
  const [recommendations] = createResource(() => ({...params}), provider.getRecommendations);

  createEffect(on(data, (data) => {
    setGlobalBackground(data.backgroundImage);
  }, { defer: true}))

  const Backdrop = {
    color: hexColor('#000000'),
    alpha: 0.1,
    width: 1900,
    height: 740,
    x: 10,
    y: 670,
    borderRadius: 30,
  }

  function onRowFocus(this: ElementNode) {
    this.children.selected?.setFocus();
    columnRef.y = 670;
    backdropRef.y = 670;
    backdropRef.alpha = 0.1;
  }

  function onRowFocusAnimate(this: ElementNode) {
    this.children.selected?.setFocus();
    columnRef.y = 280;
    backdropRef.y = 240;
    backdropRef.alpha = 0.9;
  }

  function onEnter(this: ElementNode) {
    let entity = this.children.selected;
    assertTruthy(entity && entity.href);
    navigate(entity.href);
  };

  let columnRef, backdropRef;

  return (
    <Show when={data()} keyed>
      <ContentBlock y={360} x={150} {...data().heroContent}></ContentBlock>
      <Column animate ref={columnRef} y={670} x={140} style={styles.Column}>
        <Show when={recommendations() && credits()}>
          <Text skipFocus style={styles.RowTitle}>Recommendations</Text>
          <TileRow autofocus onFocus={onRowFocus} onEnter={onEnter} items={recommendations()} />
          <Text skipFocus style={styles.RowTitle}>Cast and Crew</Text>
          <TileRow onFocus={onRowFocusAnimate} onEnter={onEnter} items={credits()} />
        </Show>
      </Column>
      <View ref={backdropRef} animate style={Backdrop} />

    </Show>
  );
};

export default Entity;
