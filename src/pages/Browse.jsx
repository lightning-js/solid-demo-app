import { createEffect, on, createSignal } from "solid-js";
import { Column, View, Text, activeElement } from '@lightningjs/solid';
import { useNavigate } from "@solidjs/router";
import { TileRow } from '../components';
import styles from '../styles';
import { setGlobalBackground } from "../state";
import browseProvider from '../api/providers/browse';
import { createInfiniteScroll } from '../components/pagination';

const Browse = () => {
  const [columnY, setcolumnY] = createSignal(50);
  const [showTitle, setShowTitle] = createSignal('');
  const [pages, { page, setPage }] = createInfiniteScroll(browseProvider);
  const navigate = useNavigate();

  createEffect(on(activeElement, (elm) => {
    if (elm.backdrop) {
      // elm.animate({ rotation: Math.PI * 2 }, { duration: 1500 }).start()
      setGlobalBackground(elm.backdrop);
      setShowTitle(elm.shortTitle);
    }
  }, { defer: true}))

  function onRowFocus() {
    this.children.selected.setFocus();
    setcolumnY(200 + this.y * -1);
    let numPages = pages().length;
    if (numPages === 0 || this.parent.selected >= numPages - 2) {
      setPage(numPages + 1);
    }
  }

  function onEnter() {
    let entity = this.children.selected;
    navigate(entity.href)
  };

  return (
    <>
      <View style={styles.headlineBlur}><Text>Watch {showTitle()}!</Text></View>
      <Column announce="All Trending - Week" selected={1} animate y={columnY()} style={styles.Column}>
        <For each={pages()}>
          {(items, i) =>
            <>
              <Text skipFocus style={styles.TileRowText}>{i()}) {items[0].title} ---</Text>
              <TileRow autofocus={i() === 0} wrap={i() % 2 === 0}
                items={items} onFocus={onRowFocus} onEnter={onEnter} />
            </>
          }
        </For>
      </Column>
    </>
  );
};

export default Browse;
