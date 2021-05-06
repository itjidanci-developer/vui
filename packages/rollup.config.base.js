// import { babel } from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import VuePlugin from 'rollup-plugin-vue'
import cjs from '@rollup/plugin-commonjs'
import replace from '@rollup/plugin-replace'
// import rollupTypescript from '@rollup/plugin-typescript';
import rollupTypescript from 'rollup-plugin-typescript2';
import fs from 'fs'
import pkgConfig  from './package.json'
import autoprefixer from 'autoprefixer'
import scss from 'rollup-plugin-scss'
import sass from 'sass'
// import postcss from 'postcss'
const banner =
  '/*!\n' +
  ' *  @oovui/vue v' + pkgConfig.version + '\n' +
  ' * (c) 2018-' + new Date().getFullYear() + ' itshizhan@163.com\n' +
  ' * Released under the MIT License.\n' +
  ' */';

export {
  banner
}


export default {
  input: './index.ts',
  plugins: [
    resolve({
      extensions: ['.js', '.ts', '.vue']
    }),
    VuePlugin({
      css: false,
      style: {
        postcssPlugins: [autoprefixer],
      },
    }),
    cjs(),
    scss({
      sass:sass,
      output: function (styles) {
        fs.writeFileSync('lib/itshizhan-vui.css', styles);
      },
      // Prefix global scss. Useful for variables and mixins.
      // prefix: `@import "./styles/global.scss";`,
      // Run postcss processor before output
      // processor: css => postcss([autoprefixer()])
    }),
    rollupTypescript({
      // 导入本地ts配置
      // tsconfig: './tsconfig.json', 
      // lib: ["es5", "es6", "dom", "esnext"],
      // extensions: ['.js', '.ts', '.vue'],
      // target: "es5",
      sourceMap: true
    }),
    // babel({
    //   exclude: 'node_modules/**',
    //   babelHelpers: 'bundled'
    // }),
    replace({
      VERSION: JSON.stringify(pkgConfig.version),
    }),
  ],
  external: [
    //不被打包的库，比如在项目中会被引入
    'vue',
    //'feather-icons'
    //,'@babel/runtime/helpers/defineProperty'
  ],
  // (!) Unused external imports
  // createVNode imported from external module 'vue' but never used
  onwarn(warning, rollupWarn) {
    if (warning.code !== 'UNUSED_EXTERNAL_IMPORT') {
      rollupWarn(warning);
    }
  },
}
