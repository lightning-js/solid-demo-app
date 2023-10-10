import { Canvas } from '@lightningjs/solid';
import coreExtensionModuleUrl from '../src/AppCoreExtensions.js?importChunkUrl';

const RenderOptions = {
  coreExtensionModule: coreExtensionModuleUrl,
  threadXCoreWorkerUrl: undefined,
  rootId: 'storybook-root',
  // deviceLogicalPixelRatio: 1
}

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => <Canvas options={RenderOptions}>
        <Story />
      </Canvas>
  ],
};

export default preview;
