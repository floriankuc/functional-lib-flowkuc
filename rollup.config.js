import externals from 'rollup-plugin-node-externals';

const dist = 'dist/index';

export default {
  input: 'src/index.js',
  output: [
    {
      file: `${dist}.cjs.js`,
      format: 'cjs',
    },
    {
      file: `${dist}.esm.js`,
      format: 'esm',
    },
    {
      file: `${dist}.umd.js`,
      format: 'umd',
      name: 'functionalLibFlowkuc',
    },
  ],
  plugins: externals(),
};
