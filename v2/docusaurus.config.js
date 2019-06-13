/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: 'burrrata',
  tagline: 'yet another anonymous piece of cheese on the internet',
	organizationName: 'burrrata',
	projectName: 'website',
	////////////////////////////////////
	// for publishing to gh-pages branch
	url: 'https://burrrata.github.io',
	baseUrl: 'website',
	// for local development
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
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
					to: 'docs/doc1', 
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
							label: 'Services',
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
							label: 'Riot',
							href: '@burrrata:matrix.org'
						},
						{
							label: 'Keybase',
							href: 'https://keybase.io/burrrata'
						},
          ],
        },
        {
          title: 'My Stuff',
          items: [
						{
							label: 'Projects',
							to: 'docs/doc1',
						},
            {
              label: 'Blog',
              to: 'blog',
            },
						{
							label: 'GitHub',
							href: 'https://github.com/burrrata',
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
