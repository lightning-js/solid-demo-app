import { createEffect, on } from "solid-js";
import { Route, Routes, useNavigate } from "@solidjs/router";
import { useFocusManager, useAnnouncer, View, activeElement} from "@lightningjs/solid";
import Browse from './Browse';
import TextPage from './Text';
import ButtonsPage from './Buttons';
import ButtonsMaterialPage from './ButtonsMaterial';
import Entity from './Entity';
import NotFound from './NotFound';
import Background from '../components/Background';
import {FocusRing} from '../components';

const App = () => {
  useFocusManager();
  const Announcer = useAnnouncer();
  Announcer.debug = true;
  const navigate = useNavigate();
  let focusRingRef;

  createEffect(on(activeElement, (elm) => {
    focusRingRef.parent = elm;
    focusRingRef.alpha = 1;
    // focusRingRef.height = elm.height + 8;
    // focusRingRef.width = elm.width + 8;
    focusRingRef.zIndex = (elm.zIndex - 0.00000001);
  }, { defer: true}))

  return (
    <View ref={window.APP}
      onLast={() => history.back()}
      onText={() => navigate('/text')}
      onButtons={() => navigate('/buttons')}
      onMenu={() => navigate('/')} style={{ width: 1920, height: 1080 }}>
      <Background />
      <FocusRing color="#22cdf8" ref={focusRingRef} />
      <Routes>
        <Route path="/" component={Browse} />
        <Route path="/text" component={TextPage} />
        <Route path="/buttons" component={ButtonsPage} />
        <Route path="/buttonsmaterial" component={ButtonsMaterialPage} />
        <Route path="/entity/:type/:id" component={Entity} />
        <Route path="/*all" component={NotFound} />
      </Routes>
    </View>
  )
};

export default App;
