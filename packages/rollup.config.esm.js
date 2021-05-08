import base, {banner} from './rollup.config.base';


const config = Object.assign({}, base, {
  output: {
    name: 'itshizhanVui',
    file: 'lib/index.esm.js',
    format: 'es',
    banner,
    sourcemap: true
  },
})

export default config