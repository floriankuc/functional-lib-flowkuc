import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import sourceMaps from 'rollup-plugin-sourcemaps';
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import dts from 'rollup-plugin-dts';
import pkg from './package.json';
import del from 'rollup-plugin-delete';

export default [
  {
    input: 'src/index.js',
    output: [
      { file: pkg.main, name: 'functional-lib-flowkuc', format: 'umd', sourcemap: true },
      { file: pkg.module, format: 'es', sourcemap: true },
    ],
    external: [],
    plugins: [typescript({ useTsconfigDeclarationDir: true }), commonjs(), resolve(), sourceMaps(), terser()],
  },
  {
    input: 'dist/types/index.d.ts',
    output: [{ file: 'dist/types/index.d.ts', format: 'es' }],
    plugins: [
      dts(),
      del({
        targets: ['dist/types/containers', 'dist/types/fns'],
        hook: 'buildEnd',
      }),
    ],
  },
];
