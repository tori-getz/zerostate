import { defineBuildConfig } from 'unbuild';
import * as path from 'node:path';

export default defineBuildConfig({
  entries: [
    './src/index'
  ],
  clean: true,
  declaration: true,
  rollup: {
    emitCJS: true,
    inlineDependencies: true,
  },
  alias: {
    '~': path.resolve(__dirname, 'src'),
  },
  externals: ['react', 'react-dom']
});
