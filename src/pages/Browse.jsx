import { createEffect, createMemo, on, createSignal,
  Show, createResource, createSelector } from "solid-js";
import { View, Text, activeElement } from '@lightningjs/solid';
import { Column } from '@lightningjs/solid-primitives';
import { useNavigate, useParams } from "@solidjs/router";
import { TileRow } from '../components';
import styles from '../styles';
import { setGlobalBackground } from "../state";
import browseProvider from '../api/providers/browse';
import { createInfiniteScroll } from '../components/pagination';
import ContentBlock from "../components/ContentBlock";
import * as entityProvider from '../api/providers/entity';

const Browse = () => {
  const params = useParams();
  const [columnY, setcolumnY] = createSignal(0);
  const [entityInfo, setEntityInfo] = createSignal();
  const [entityData] = createResource(entityInfo, entityProvider.getInfo);
  const [heroContent, setHeroContent] = createSignal({});
  const navigate = useNavigate();
  const isFirst = createSelector(() => {
    return 0;
  });

  const provider = createMemo(() => {
    return createInfiniteScroll(browseProvider(params.filter || 'all'));
  });

  createEffect(on(activeElement, (elm) => {
    if (elm.backdrop) {
      setGlobalBackground(elm.backdrop);
    }
    // if (elm.entityInfo) {
    //   setEntityInfo(elm.entityInfo);
    // }
    if (elm.heroContent) {
      setHeroContent(elm.heroContent);
    }
  }, { defer: true}))

  function onRowFocus() {
    this.children.selected.setFocus();
    setcolumnY(this.y * -1 + 24);
    let numPages = provider().pages().length;
    if (numPages === 0 || this.parent.selected >= numPages - 2) {
      provider().setPage(p => p + 1);
    }
  }

  function onEnter() {
    let entity = this.children.selected;
    navigate(entity.href)
  };

  return (
    <Show when={provider().pages().length}>
      <ContentBlock y={360} x={150} {...heroContent()}></ContentBlock>
      <View clipping style={styles.itemsContainer}>
        <Column plinko announce="All Trending - Week" animate y={columnY()} style={styles.Column}>
          <For each={provider().pages()} keyed>
            {(items, i) =>
              <TileRow autofocus={isFirst(i())}
                  items={items} onFocus={onRowFocus} onEnter={onEnter} />
            }
          </For>
        </Column>
      </View>
    </Show>
  );
};

export default Browse;
