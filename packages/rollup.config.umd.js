import base , {banner} from './rollup.config.base';

const config = Object.assign({}, base, {
  output: {

    name: 'itshizhanVui',
    file: 'lib/itshizhan-vui.umd.js',
    format: 'umd',
    banner,
    globals: {
      'vue': 'Vue',
      'feather-icons':'feather',
      '@babel/runtime/helpers/defineProperty':'_defineProperty'
    }
  },
})

export default config