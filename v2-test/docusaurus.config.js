module.exports = {
  title: 'burrrata',
  tagline: 'yet another anonymous piece of cheese on the internet',
	organizationName: 'burrrata',
	projectName: 'website',
	////////////////////////////////////
	// for local development
	url: 'https://your-docusaurus-test-site.com',
	baseUrl: '/',
	// for publishing to gh-pages branch
	//url: 'https://burrrata.github.io',
	//baseUrl: '/website/',
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
					label: 'Projects', 
					to: 'projects', 
					position: 'left'
				},
				{
					label: 'Blog', 
					to: 'blog', 
					position: 'left'
				},
        {
          label: 'Work With Me',
					to: '',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Work With Me',
          items: [
            {
              label: 'Bio',
              to: 'docs/doc1',
            },
						{
							label: 'Areas Of Expertise',
							to: 'docs/doc2',
						},
						{
							label: 'Rates',
							to: 'docs/doc3',
						},
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Reddit',
              href: 'https://www.reddit.com/user/burrrata',
            },
						{
							label: 'Keybase',
							href: 'https://keybase.io/burrrata'
						},
						{
							label: 'Riot',
							href: '@burrrata:matrix.org'
						},
						{
							label: 'ethresear.ch',
							href: 'https://ethresear.ch/u/burrrata/summary',
						},
						{
							label: 'forum.aragon.org',
							href: 'https://forum.aragon.org/u/burrrata/summary',
						},
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
