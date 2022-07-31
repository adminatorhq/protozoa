export default {
  // input: inputFile,
  // external: (id: string) => {
  //   return !id.startsWith('.') && !path.isAbsolute(id);
  // },
  treeshake: {
    moduleSideEffects: false,
  },
  //     plugins: [
  //       resolve({
  //         mainFields: ['module', 'browser', 'main'],
  //         extensions: ['.mjs', '.esm.js', 'cjs', '.js', '.ts', '.tsx', '.json', '.jsx'],
  //       }),
  //       json(),
  //       postcss({
  //         extract: false,
  //         modules: true,
  //         use: ['sass'],
  //       }),
  //       typescript({
  //         clean: true,
  //         typescript: require('typescript'),
  //         tsconfig: paths.tsConfig,
  //         abortOnError: true,
  //         tsconfigDefaults: {
  //           compilerOptions: {
  //             sourceMap: true,
  //             declaration: true,
  //             target: 'esnext',
  //             jsx: 'react',
  //           },
  //           useTsconfigDeclarationDir: true,
  //         },
  //         tsconfigOverride: {
  //           compilerOptions: {
  //             sourceMap: true,
  //             target: 'esnext',
  //           },
  //         },
  //       }),
  //       babel({
  //         exclude: /\/node_modules\/core-js\//,
  //         babelHelpers: 'runtime',
  //         ...babelConfig,
  //       } as RollupBabelInputPluginOptions),
  //       injectProcessEnv({
  //         NODE_ENV: 'production',
  //       }),
  //       sourceMaps(),
  //       minify === true &&
  //         terser({
  //           compress: {
  //             keep_infinity: true,
  //             pure_getters: true,
  //             passes: 10,
  //           },
  //           ecma: 2016,
  //           toplevel: false,
  //           format: {
  //             comments: 'all',
  //           },
  //         }),
  //     ],
  //   });
};
