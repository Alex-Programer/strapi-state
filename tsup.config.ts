import type { Options } from 'tsup'

export const tsup: Options = {
  entry: [
    'src/*.ts',
    "src/*.d.ts"
  ],
  format: ['cjs', 'esm'],
  dts: true,
  splitting: true,
  clean: true,
  shims: false,
}
