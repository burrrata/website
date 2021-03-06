module.exports = {
  title: 'burrrata',
  tagline: 'yet another anonymous piece of cheese on the internet',
	organizationName: 'burrrata',
	projectName: 'website',
	////////////////////////////////////
	// for local development
	url: 'https://your-docusaurus-test-site.com',
	baseUrl: '/',
	// for publishing to burrrata.ch/website
	//url: 'https://burrrata.github.io',
	//baseUrl: '/website/',
	// for publishing to burrrata.ch
	//url: 'https://burrrata.github.io',
	//baseUrl: '/',
	///////////////////////////
  favicon: 'img/favicon.ico',
  themeConfig: {
    navbar: {
      title: 'burrrata.ch',
      logo: {
        alt: 'burrrata',
        src: 'img/burrrata.png',
      },
      links: [
        {
          label: 'About',
					to: 'docs/about',
          position: 'left',
        },
				{
					label: 'Projects', 
					to: 'projects', 
					position: 'left'
				},
				{
					label: 'Blog', 
					to: 'blog', 
					position: 'left'
				},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Let\'s Work Together',
          items: [
            {
              label: 'About',
              to: 'docs/about',
            },
						{
							label: 'Areas Of Expertise',
							to: 'docs/areas-of-expertise',
						},
						{
							label: 'Working Together',
							to: 'docs/working-together',
						},
          ],
        },
        {
          title: 'Community',
          items: [
						// Reddit
            {
              label: 'Reddit',
              href: 'https://www.reddit.com/user/burrrata',
            },
						// Keybase
						{
							label: 'Keybase',
							href: 'https://keybase.io/burrrata'
						},
						// Ethereum Research
						{
							label: 'ethresear.ch',
							href: 'https://ethresear.ch/u/burrrata/summary',
						},
						// Aragon Forum
						/*
						{
							label: 'forum.aragon.org',
							href: 'https://forum.aragon.org/u/burrrata/summary',
						},
						*/
          ],
        },
        {
          title: 'My Stuff',
          items: [
						{
							label: 'Projects',
							to: 'projects',
						},
						{
							label: 'GitHub',
							href: 'https://github.com/burrrata',
						},
            {
              label: 'Blog',
              to: 'blog',
            },
          ],
        },
      ],
      logo: {
        alt: 'burrata',
				src: 'img/burrrata.png',
      },
      copyright: `Copyright © ${new Date().getFullYear()} burrrata`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.json'),
        },
      },
    ],
  ],
};
