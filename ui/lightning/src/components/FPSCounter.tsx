import { View, Text, hexColor } from '@lightningjs/solid';
import { createSignal } from 'solid-js';
import { debounce } from '@solid-primitives/scheduled';

const fpsStyle = {
    color: 0x000000ff,
    height: 90,
    width: 330,
    x: 1500,
    y: 20,
    alpha: 0.8,
    zIndex: 100,
}

const fpsLabel = {
    x: 10,
    fontSize: 36,
    textColor: hexColor('#ffffff')
}

const fpsValue = {
    fontSize: 36,
    textColor: hexColor('#ffffff')
}

const [fps, setFps] = createSignal(0);
const [avgFps, setAvgFps] = createSignal(0);
const [minFps, setMinFps] = createSignal(99);
const [maxFps, setMaxFps] = createSignal(0);

let count = 0;
let totalFps = 0;


const resetCounter = debounce(() => {
    // clear fps
    totalFps = 0;
    count = 0;
    setMinFps(99);
}, 10000);

// Clear min fps after 10 seconds to avoid showing a low fps
// setTimeout(() => setMinFps(99), 9999);

const calcFps = (fps: number) => {
    if (!fps) return;

    setFps(fps);
    setMinFps(prev => Math.min(fps, prev));
    setMaxFps(prev => Math.max(fps, prev));

    totalFps += fps
    count++;

    setAvgFps( Math.round(totalFps / count) );

    resetCounter();
}

export function setupFPS(root) {
    root.renderer.on('fpsUpdate', (target, fpsData) => {
        const fps = typeof fpsData === 'number' ? fpsData : fpsData.fps;
        if (fps > 5) {
            calcFps(fps);
        }
    });
}

export const FPSCounter = (props) => {
  return <View {...props} style={fpsStyle}>
    <View>
        <Text style={fpsLabel}>FPS:</Text>
        <Text style={fpsValue} x={94}>{fps().toString()}</Text>
    </View>

    <View x={160}>
        <Text style={fpsLabel}>AVG:</Text>
        <Text style={fpsValue} x={104}>{avgFps().toString()}</Text>
    </View>

    <View x={0} y={40}>
        <Text style={fpsLabel}>MIN:</Text>
        <Text style={fpsValue} x={94}>{minFps().toString()}</Text>
    </View>
    
    <View x={160} y={40}>
        <Text style={fpsLabel}>MAX:</Text>
        <Text style={fpsValue} x={104}>{maxFps().toString()}</Text>
    </View>
  </View>
}
