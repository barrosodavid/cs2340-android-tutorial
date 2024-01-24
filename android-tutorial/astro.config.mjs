import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://barrosodavid.github.io/cs2340-android-tutorial/',
  base: '/cs2340-android-tutorial',
  integrations: [
		starlight({
			title: 'Android Quickstart',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
      customCss: [
        './src/styles/custom.css'
      ],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/guides/example/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
