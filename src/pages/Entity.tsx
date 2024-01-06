import { ElementNode, Text, View, Show, hexColor, setActiveElement } from '@lightningjs/solid';
import { Column } from '@lightningjs/solid-primitives';
import { useParams } from "@solidjs/router";
import { createEffect, createResource, on, createSignal } from "solid-js";
import { TileRow, Button } from '../components';
import { setGlobalBackground } from "../state";
import ContentBlock from "../components/ContentBlock";
import { useNavigate } from "@solidjs/router";
import styles from '../styles';
import * as provider from '../api/providers/entity';
import { assertTruthy } from '@lightningjs/renderer/utils';
import type { Tile } from '../api/formatters/ItemFormatter';
import { playVideo, closeVideo } from '../video';

const Entity = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [data] = createResource(() => ({...params}), provider.getInfo);
  const [credits] = createResource<any, Tile[]>(() => ({...params}), provider.getCredits);
  const [recommendations] = createResource<any, Tile[]>(() => ({...params}), provider.getRecommendations);
  const [backdropAlpha, setBackdropAlpha] = createSignal(0);

  createEffect(on(data, (data) => {
    setGlobalBackground(data.backgroundImage);
  }, { defer: true}))

  const columnY = 600;

  const Backdrop = {
    color: hexColor('#000000'),
    alpha: 0,
    width: 1900,
    height: 890,
    x: 10,
    y: columnY,
    borderRadius: 30,
  }

  function onRowFocus(this: ElementNode) {
    this.children.selected?.setFocus();
    columnRef.y = columnY;
    backdropRef.y = columnY;
    backdropRef.alpha = 0;
  }

  function onRowFocusAnimate(this: ElementNode) {
    this.children.selected?.setFocus();
    columnRef.y = 200;
    backdropRef.y = 160;
    backdropRef.alpha = 0.9;
  }

  function onEnter(this: ElementNode) {
    let entity = this.children.selected;
    assertTruthy(entity && entity.href);
    navigate(entity.href);
  };

  function onEscape() {
    closeVideo();
    // Set focus back to lightning app
    document.getElementsByTagName('canvas')[0].focus();
    setActiveElement(trailerButton);
    setBackdropAlpha(0);
  }

  function onEnterTrailer() {
    const video = playVideo();
    setActiveElement(video);
    setBackdropAlpha(0.9);
  }

  let columnRef, backdropRef, trailerButton;

  return (
    <Show when={data()} keyed>
      <View onUp={() => trailerButton.setFocus()} onEscape={onEscape}>
        <ContentBlock y={360} x={150} {...data().heroContent}></ContentBlock>
        <Button autofocus
          ref={trailerButton}
          y={560} x={150}
          onDown={() => columnRef.setFocus()}
          onEnter={onEnterTrailer}
          >Watch Trailer</Button>
        <Column animate ref={columnRef} y={columnY} x={140} style={styles.Column} zIndex={5}>
          <Show when={recommendations() && credits()}>
            <Text skipFocus style={styles.RowTitle}>Recommendations</Text>
            <TileRow onFocus={onRowFocus} onEnter={onEnter} items={recommendations()} />
            <Text skipFocus style={styles.RowTitle}>Cast and Crew</Text>
            <TileRow onFocus={onRowFocusAnimate} onEnter={onEnter} items={credits()} />
          </Show>
        </Column>
        <View ref={backdropRef} animate style={Backdrop} />
      </View>
      <View alpha={backdropAlpha()} color={hexColor('#000000')}  zIndex={200}/>
    </Show>
  );
};

export default Entity;
