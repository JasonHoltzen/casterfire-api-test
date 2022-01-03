import preprocess from 'svelte-preprocess';
import path from 'path';
// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		vite: {
			css: {
				preprocessorOptions: {
					scss: {
						additionalData: '@use "src/variables.scss" as *;'
					}
				}
			},
			resolve: {
				alias: {
					$assets: path.resolve('./src/lib/assets'),
					$components: path.resolve('./src/lib/components'),
					$icons: path.resolve('./src/lib/icons'),
					$models: path.resolve('./src/models'),
					$schemas: path.resolve('./src/schemas'),
					$stores: path.resolve('./src/stores'),
					$utils: path.resolve('./src/utils')
				}
			}
		}
	},
	preprocess: [
		preprocess({
			scss: {
				prependData: '@use "src/variables.scss" as *;'
			},
			postcss: true
		})
	]
};

export default config;
