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
				github: 'https://github.com/barrosodavid/cs2340-android-tutorial',
			},
      customCss: [
        './src/styles/custom.css'
      ],
			sidebar: [
				{
					label: 'Start here',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: "What you'll learn", link: '/start/intro/' },
            { label: "Installing Android Studio", link: "/start/install-android-studio"}
					],
				},
				{
					label: 'Build your first Android App',
					autogenerate: { directory: 'app-dev' },
				},
			],
		}),
	],
});
