import { createEffect, on } from "solid-js";
import { Route, Routes, useNavigate } from "@solidjs/router";
import { View, activeElement} from "@lightningjs/solid";
import { useFocusManager, useAnnouncer } from "@lightningjs/solid-primitives";
import Browse from './Browse';
import Examples from './Examples';
import TextPage from './Text';
import ButtonsPage from './Buttons';
import FlexPage from './Flex';
import FlexColumnPage from './FlexColumn';
import ButtonsMaterialPage from './ButtonsMaterial';
import Entity from './Entity';
import People from './People';
import NotFound from './NotFound';
import Background from '../components/Background';
import NavDrawer from '../components/NavDrawer/NavDrawer';
import {FocusRing} from '../components';
import theme from 'theme';

const App = () => {
  useFocusManager({
    m: 'Menu',
    f: 'Flex',
    c: 'FlexColumn',
    t: 'Text',
    b: 'Buttons'
  });
  useAnnouncer();
  const navigate = useNavigate();

  let focusRingRef, navDrawer, lastFocused;

  createEffect(on(activeElement, (elm) => {
    setTimeout(() => {
      if (elm.heroContent) {
        focusRingRef.parent = elm;
        focusRingRef.alpha = 1;
        focusRingRef.width = elm.width + 10;
        focusRingRef.height = elm.height + 10;
        focusRingRef.zIndex = (elm.zIndex - 0.00000001);
      } else {
        focusRingRef.alpha = 0;
      }
    }, 10)
  }, { defer: true}))

  return (
    <View ref={window.APP}
      onLast={() => history.back()}
      onText={() => navigate('/text')}
      onFlex={() => navigate('/flex')}
      onFlexColumn={() => navigate('/flexcolumn')}
      onButtons={() => navigate('/buttons')}
      onMenu={() => navigate('/')} style={{ width: 1920, height: 1080 }}
      onLeft={() => {
        if (navDrawer.states.has('focus')) {
          return false;
        }
        lastFocused = activeElement();
        navDrawer.setFocus();
      }}
      onRight={() => navDrawer.states.has('focus') && lastFocused.setFocus()}>
      <Background />
      <FocusRing color={theme.color.primary} ref={focusRingRef} />
      <Routes>
        <Route path="/" component={Browse} />
        <Route path="/examples" component={Examples} />
        <Route path="/browse/:filter" component={Browse} />
        <Route path="/text" component={TextPage} />
        <Route path="/buttons" component={ButtonsPage} />
        <Route path="/flex" component={FlexPage} />
        <Route path="/flexcolumn" component={FlexColumnPage} />
        <Route path="/buttonsmaterial" component={ButtonsMaterialPage} />
        <Route path="/entity/people/:id" component={People} />
        <Route path="/entity/:type/:id" component={Entity} />
        <Route path="/*all" component={NotFound} />
      </Routes>
      <NavDrawer ref={navDrawer} />
    </View>
  )
};

export default App;
