import glob from 'glob'
import { defineConfig } from 'tsup'

export default defineConfig(() => {
  return {
    entry: glob.sync('src/*.ts'),
    format: ['esm', 'cjs'],
    dts: true,
    splitting: true,
    minify: true,
    sourcemap: true,
    clean: true,
    treeshake: true,
    noExternal: [/fp-ts\/*/],
    outDir: './libs',
  }
})
