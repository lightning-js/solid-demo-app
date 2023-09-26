import { Text, View } from '@lightningjs/solid';
import { Column } from '@lightningjs/solid-primitives';
import { useParams } from "@solidjs/router";
import { createEffect, createResource, on } from "solid-js";
import { TileRow } from '../components';
import { setGlobalBackground } from "../state";
import { useNavigate } from "@solidjs/router";
import styles from '../styles';
import * as provider from '../api/providers/entity';

const Entity = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [data] = createResource(() => ({...params}), provider.getInfo);
  const [credits] = createResource(() => ({...params}), provider.getCredits);
  const [recommendations] = createResource(() => ({...params}), provider.getRecommendations);

  createEffect(on(data, (data) => {
    console.log(data);
    setGlobalBackground(data.backgroundImage);
  }, { defer: true}))

  const OverviewContainer = {
    width: 900,
    height: 500,
    y: 350,
    x: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flexStart',
    color: 0x00000000
  }

  const SupportContainer = {
    width: 900,
    height: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flexStart',
    color: 0x00000000
  }

  const Title = {
    fontSize: 42,
  };

  const Overview = {
    width: OverviewContainer.width,
    fontSize: 26,
    contain: 'width'
  };

  const Subline = {
    fontSize: 22,
  };

  const Backdrop = {
    color: '#000000',
    alpha: 0.1,
    width: 1900,
    height: 740,
    x: 10,
    y: 670,
    borderRadius: 30,
  }

  function onRowFocus() {
    this.children.selected.setFocus();
    columnRef.y = 670;
    backdropRef.y = 670;
    backdropRef.alpha = 0.1;
  }

  function onRowFocusAnimate() {
    this.children.selected.setFocus();
    columnRef.y = 300;
    backdropRef.y = 260;
    backdropRef.alpha = 0.8;
  }

  function onEnter() {
    let entity = this.children.selected;
    navigate(entity.href);
  };

  let columnRef, backdropRef;

  return (
    <Show when={data()} keyed>
      <View gap={10} style={OverviewContainer}>
        <Text style={Title}>{data().title || data().name}</Text>
        <Text style={Overview}>{data().overview}</Text>
        <View gap={8} style={SupportContainer}>
          <Text style={Subline}>Support Text</Text>
          <Text style={Subline}>{data().release_date}</Text>
          <View width={30} height={30} src={'/assets/rt-popcorn.png'}></View>
          <Text style={Subline}>90%</Text>
        </View>
      </View>

      <Column animate ref={columnRef} y={670} x={26} style={styles.Column}>
        <Show when={recommendations() && credits()}>
          <TileRow wrap width={1900} autofocus onFocus={onRowFocus} onEnter={onEnter} items={recommendations()} />
          <TileRow wrap width={1900} onFocus={onRowFocusAnimate} onEnter={onEnter} items={credits()} />
        </Show>
      </Column>
      <View ref={backdropRef} animate style={Backdrop} />

    </Show>
  );
};

export default Entity;
