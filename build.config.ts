import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: ['./src/index'],
  declaration: 'compatible', // generates .d.ts, .d.mts AND .d.cts
  rollup: {
    emitCJS: true,
  },
})
