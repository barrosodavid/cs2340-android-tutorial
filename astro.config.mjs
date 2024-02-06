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
					label: 'Team Introduction',
					items: [ {label: "Team Introduction", link: "/team-intro/intro" }],
				},
				{
					label: 'Android Studio Tutorial', items: [{
						label: 'Welcome! First steps!',
						items: [
							// Each item here is one entry in the navigation menu.
							{ label: "What you'll learn", link: '/start/intro/' },
							{ label: "Installing Android Studio", link: "/start/install-android-studio"},
							{ label: "Setting Up Android Studio", link: "/start/android-studio-setup"}
						],
					},
					{
						label: 'Build your first Android App',
						items: [
							// Each item here is one entry in the navigation menu.
							{ label: "Layout", link: '/app-dev/create-project' },
							{ label: "Color", link: '/app-dev/color' },
							{ label: "Views", link: '/app-dev/views' },
							{ label: "Updating appearance", link: '/app-dev/appearance'},
							
							{ label: "Interactive", link: '/app-dev/interactive'},
							{ label: "Second Fragment", link: '/app-dev/second-fragment'},
							{ label: "Keep Learning", link: 'app-dev/keep-learning'},
						]
					},
					{
						label: 'Troubleshooting', items: [{ label: "Troubleshooting", link: '/app-dev/troubleshooting'}]
					}]
				},
				{
					label: 'College App', items: [{ label: "College App Description", link: "/college-app-desc/desc"}]
				}
				
			],
		}),
	],
});
